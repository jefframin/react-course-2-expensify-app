import moment from 'moment'
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        order: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set order of expenses to amount', () => {
    const state = filtersReducer(undefined, { type: 'SET_ORDER', order: 'amount'})
    expect(state.order).toBe('amount')
})

test('should set order of expenses to date', () => {
    const state = filtersReducer({ order: 'feh' }, { type: 'SET_ORDER', order: 'date'})
    expect(state.order).toBe('date')
})

test('should set text filter', () => {
    const feh = 'feh'
    const state = filtersReducer(undefined, { type: 'SET_TEXT', text: feh})
    expect(state.text).toBe(feh)
})

test('should set filter start date', () => {
    const date = moment(1234125)
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: date})
    expect(state.startDate).toEqual(date)
})

test('should set filter end date', () => {
    const date = moment(1234125)
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: date})
    expect(state.endDate).toEqual(date)
})