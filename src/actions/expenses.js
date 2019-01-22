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

export const startRemoveExpense = ({ id } = {}) => {
    return (dispatch, getState) => {
        return database.ref(`${getExpensesRoot(getState)}/${id}`).remove().then(( )=> {
            dispatch(removeExpenseAction({ id }))
        })
    }
}

export const editExpenseAction = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
}

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        return database.ref(`${getExpensesRoot(getState)}/${id}`).update(updates).then(() => {
            dispatch(editExpenseAction(id, updates))
        })
    }
}

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const {
            description = '',
            note =  '',
            amount = 0,
            created = 0
        } = expenseData
        const expense = { description, note, amount, created }
        return database.ref(getExpensesRoot(getState)).push(expense).then((ref) => {
            dispatch(addExpenseAction({
                id: ref.key,
                ...expense
            }))
        })
    }
}

// set expenses
export const setExpenses = (expenses) => {
    return {
        type: 'SET_EXPENSES',
        expenses: expenses
    }
} 

const getExpensesRoot = (getState) => {
        return getExpensesRootForUID(getState().auth.uid)
}

export const getExpensesRootForUID = (uid) => {
        return `users/${uid}/expenses`
}
        
export const startSetExpenses = () => {

    return (dispatch, getState) => {
        return database.ref(getExpensesRoot(getState)).once('value').then((snapshot) => {
            const expenses = []
            snapshot.forEach((element) => {
                expenses.push({
                    ...element.val(),
                    id: element.key
                });
            });
        dispatch(setExpenses(expenses));
    });
};
};