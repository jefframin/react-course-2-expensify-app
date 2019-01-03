import { addExpenseAction, editExpenseAction, removeExpenseAction } from '../../actions/expenses'

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
    const expenseData = {
        description: 'rent',
        amount: 110000,
        created: 10000000,
        note: 'expense note'
    }
    const action = addExpenseAction(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

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