import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startAddExpense, addExpenseAction, editExpenseAction, removeExpenseAction } from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])


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
    const store = createMockStore({})
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
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((dbRef) => {
        expect(dbRef.val()).toEqual(expenseData)
        done()
    })
})

test('should add expense with defaults to DB and store', (done) => {
    const store = createMockStore({})

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
        return database.ref(`expenses/${actions[0].expense.id}`).once('value')

    }).then((dbRef) => {
        expect(dbRef.val()).toEqual(expenseData)
        done()
    })
})

/*
test('should create add expense action object with default values', () => {
    const action = addExpenseAction()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '',
            note: '',
            amount: 0,
            created: 0,
            id: expect.any(String)
        }
    })
})
*/