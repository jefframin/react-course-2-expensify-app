import uuid from 'uuid'

export const addExpenseAction = ({ description = '', note = '', amount = 0, created = 0 } = {}) => {
    return {
        type: 'ADD_EXPENSE',
        expense: {
        id: uuid(),
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