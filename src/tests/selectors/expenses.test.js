import moment from 'moment'
import getVisibleExpenses from '../../selectors/expenses'
import expenses from '../fixtures/expenses'

test('should filter by text value', () => {
    const filters = {
        text: 'e',
        order: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses( {expenses, filters} )
    expect(result).toEqual([ expenses[1], expenses[2] ])
})

test('should filter by start date', () => {
    const filters = {
        text: '',
        order: 'date',
        startDate: moment(0),
        endDate: undefined
    }
    const result = getVisibleExpenses( {expenses, filters} )
    expect(result).toEqual([ expenses[0], expenses[2] ])
})

test('should filter by end date', () => {
    const filters = {
        text: '',
        order: 'date',
        startDate: undefined,
        endDate: moment(0)
    }
    const result = getVisibleExpenses( {expenses, filters} )
    expect(result).toEqual([ expenses[1], expenses[0] ])
})

test('should order by date', () => {
    const filters = {
        text: '',
        order: 'date',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses( {expenses, filters} )
    expect(result).toEqual([ expenses[1], expenses[0], expenses[2] ])
})

test('should order by amount', () => {
    const filters = {
        text: '',
        order: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const result = getVisibleExpenses( {expenses, filters} )
    expect(result).toEqual([ expenses[0], expenses[2], expenses[1] ])
})