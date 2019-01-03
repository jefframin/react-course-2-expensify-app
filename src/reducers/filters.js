import moment from 'moment'

const defaultFilters = {
        text: '',
        order: 'date',   // date or amount
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
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

export default filtersReducer