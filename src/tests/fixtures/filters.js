import moment from 'moment'

const filters = {
      text: '',
      order: 'date',
      startDate: undefined,
      endDate: undefined
    }

const altFilters = {
      text: 'gum',
      order: 'amount',
      startDate: moment(0),
      endDate: moment(0).add(3, 'days')
    }

export { filters, altFilters }