import { createStore, combineReducers } from 'redux'
import uuid from 'uuid'

const addExpenseAction = ({ description = '', note = '', amount = 0, created = 0 } = {}) => {
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

const removeExpenseAction = ({ id } = {}) => {
    return {
        type: 'REMOVE_EXPENSE',
        id: id
    }
}

const editExpenseAction = (id, updates) => {
    return {
        type: 'EDIT_EXPENSE',
        id: id,
        updates: updates
    }
}

const defaultExpenses = []

const expensesReducer = (state = defaultExpenses, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE': 
            return [...state, action.expense]
        case 'REMOVE_EXPENSE': 
            return state.filter((expense) => {
                return expense.id != action.id
            })
        case 'EDIT_EXPENSE': 
            return state.map((expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }
                }
                else {
                    return expense
                }
            })
        default: 
            return state;
    }
}

const defaultFilters = {
        text: '',
        order: 'date',   // date or amount
        startDate: undefined,
        endDate: undefined
}

const setTextFilterAction = (text = '') => {
    return {
        type: 'SET_TEXT',
        text: text
    }
}

const sortByAmount = () => {
    return {
        type: 'SET_ORDER',
        order: 'amount'
    }
}

const sortByDate = () => {
    return {
        type: 'SET_ORDER',
        order: 'date'
    }
}

const setStartDate = (date) => {
    return {
        type: 'SET_START_DATE',
        startDate: date
    }
}

const setEndDate = (date) => {
    return {
        type: 'SET_END_DATE',
        endDate: date
    }
}

const filtersReducer = (state = defaultFilters, action) => {
    switch (action.type) {
        case 'SET_TEXT': 
            return {
                ...state,
                text: action.text
            }
        case 'SET_ORDER': 
            return {
                ...state,
                order: action.order
            }
        case 'SET_START_DATE': 
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE': 
            return {
                ...state,
                endDate: action.endDate
            }
        default: 
            return state;
    }
}

const getVisibleExpenses = ( {expenses, filters} ) => {
    return expenses.filter((expense) => {
            return expense.description.toLowerCase().includes(filters.text.toLowerCase()) &&
                   (typeof filters.startDate !== 'number' || expense.created >= filters.startDate) &&
                   (typeof filters.endDate !== 'number' || expense.created <= filters.endDate)
        }).sort((a, b) => {
            switch (filters.order) {
                case 'amount':
                    return a.amount < b.amount ? -1 : 1
                case 'date':
                    return a.created < b.created ? -1 : 1
                default:
                    return 0
            }
        })
}


const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
    );

store.subscribe(() => {
  //  console.log(store.getState())
    console.log(getVisibleExpenses(store.getState()))
})

const exp1 = store.dispatch(addExpenseAction({ description: 'rent', amount: 100, created: 1000}))
const exp2 = store.dispatch(addExpenseAction({ description: 'coffee', amount: 300, created: -1000}))

/*
store.dispatch(removeExpenseAction({ id: exp1.expense.id }))

store.dispatch(editExpenseAction( exp2.expense.id, { amount: 500 } ))

store.dispatch(setTextFilterAction('rent'))
store.dispatch(setTextFilterAction())

store.dispatch(sortByAmount())
store.dispatch(sortByDate())

store.dispatch(setStartDate(125))
store.dispatch(setStartDate())
store.dispatch(setEndDate(1250))
*/

store.dispatch(setTextFilterAction('coffee'))
store.dispatch(setTextFilterAction())

//store.dispatch(setStartDate(125))
//store.dispatch(setEndDate(1250))

store.dispatch(sortByDate())
store.dispatch(sortByAmount())


const demoState = {
    expenses: [{
        id: 'aoeifw',
        description: 'January Rent',
        note: 'this was final payment for old address',
        amount: 54500,
        created: 0
    }],
    filters: {
        text: 'rent',
        order: 'amount',   // date or amount
        startDate: undefined,
        endDate: undefined
    }
}