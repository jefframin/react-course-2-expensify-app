import moment from 'moment'

const getVisibleExpenses = ( {expenses, filters} ) => {
    return expenses.filter((expense) => {
            const timeCreated = moment(expense.created)
            return (expense.description.toLowerCase().includes(filters.text.toLowerCase()) &&
                   (filters.startDate ? filters.startDate.isSameOrBefore(timeCreated, 'day') : true) &&
                   (filters.endDate ? filters.endDate.isSameOrAfter(timeCreated, 'day') : true))
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

export default getVisibleExpenses