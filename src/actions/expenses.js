import uuid from 'uuid'
import database from '../firebase/firebase'

export const addExpenseAction = ({ id, description, note, amount, created } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
        id: id,
        description: description,
        note: note,
        amount: amount,
        created: created
        }
    }
}

export const removeExpenseAction = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
}

export const editExpenseAction = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch) => {
        const {
            description = '',
            note =  '',
            amount = 0,
            created = 0
        } = expenseData
        const expense = { description, note, amount, created }
        return database.ref('expenses').push(expense).then((ref) => {
            dispatch(addExpenseAction({
                id: ref.key,
                ...expense
            }))
        })
    };
}