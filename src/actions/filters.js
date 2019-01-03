export const setTextFilterAction = (text = '') => {
    return {
        type: 'SET_TEXT',
        text: text
    }
}

export const sortByAmount = () => {
    return {
        type: 'SET_ORDER',
        order: 'amount'
    }
}

export const sortByDate = () => {
    return {
        type: 'SET_ORDER',
        order: 'date'
    }
}

export const setStartDate = (date) => {
    return {
        type: 'SET_START_DATE',
        startDate: date
    }
}

export const setEndDate = (date) => {
    return {
        type: 'SET_END_DATE',
        endDate: date
    }
}