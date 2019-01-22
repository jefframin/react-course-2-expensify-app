import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, 
         addExpenseAction, 
         editExpenseAction, 
         removeExpenseAction, 
         setExpenses, 
         startSetExpenses,
         startEditExpense,
         getExpensesRootForUID,
         startRemoveExpense } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = 'testuserid'
const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = []
    /*
    let count = 0
    expenses.forEach(({ description, note, amount, created }) => {
        expensesData[count++] = {description, note, amount, created}
    })
    */
    expenses.forEach(({ id, description, note, amount, created }) => {
        expensesData[id] = {description, note, amount, created}
    })
    database.ref(getExpensesRootForUID(uid)).set(expensesData).then(() => done())
})

test('should create remove expense action object', () => {
    const action = removeExpenseAction({ id: 'feh' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: 'feh'
    })
})

test('should create edit expense action object', () => {
    const action = editExpenseAction('feh', { note: 'new note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'feh',
        updates: { note: 'new note' }
    })
})

test('should create add expense action object without default values', () => {
    const action = addExpenseAction(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to DB and store', (done) => {
    const store = createMockStore({ auth: { uid } })
    const expenseData = {
        description: 'mouse',
        amount: 3000,
        note: 'was for mouse',
        created: 1235235
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`${getExpensesRootForUID(uid)}/${actions[0].expense.id}`).once('value')

    }).then((dbRef) => {
        expect(dbRef.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to DB and store', (done) => {
    const store = createMockStore({ auth: { uid } })

    const expenseData = {
                description: '',
                note: '',
                amount: 0,
                created: 0
    }

    store.dispatch(startAddExpense()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })
        return database.ref(`${getExpensesRootForUID(uid)}/${actions[0].expense.id}`).once('value')

    }).then((dbRef) => {
        expect(dbRef.val()).toEqual(expenseData)
        done()
    })
})

test('should set up set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses: expenses
    })
})

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({ auth: { uid } })
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses: expenses
        })
        done()
    })
})

test('should remove expense from DB', (done) => {
    const store = createMockStore( {auth: { uid } })

    store.dispatch(startRemoveExpense({ id: 1 })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id: 1
        })
        return database.ref(`${getExpensesRootForUID(uid)}/${actions[0].id}`).once('value')

    }).then((dbRef) => {
        expect(dbRef.val()).toEqual(null)
        done()
    })
})

test('should edit expense in DB', (done) => {
    const expenseData = {
                description: 'new desc',
                note: 'new note',
                amount: 1234,
                created: 23490
    }
    const expenseID = 2
    const store = createMockStore({ auth: { uid } })

    store.dispatch(startEditExpense(expenseID, expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id: expenseID,
            updates: expenseData
        })
        return database.ref(`${getExpensesRootForUID(uid)}/${expenseID}`).once('value')

    }).then((dbRef) => {
        expect(dbRef.val()).toEqual(expenseData)
        done()
    })
})