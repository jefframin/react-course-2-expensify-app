import moment from 'moment'

const expenses = [
    {
      id: '1',
      description: 'gum',
      note: 'gum note',
      amount: 195,
      created: 0
    },
    {
      id: '2',
      description: 'rent',
      note: 'rent note',
      amount: 109500,
      created: moment(0).subtract(4, 'days').valueOf()
    },
    {
      id: '3',
      description: 'credit card',
      note: 'credit card note',
      amount: 40000,
      created: moment(0).add(4, 'days').valueOf()
    }
]

export default expenses