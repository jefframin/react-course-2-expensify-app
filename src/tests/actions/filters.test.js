import moment from 'moment'
import { setStartDate, setEndDate, setTextFilterAction, sortByAmount, sortByDate } from '../../actions/filters'

test('should generate set start date action', () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action', () => {
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate sort by date action', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SET_ORDER',
        order: 'date'
    })
})

test('should generate sort by amount action', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SET_ORDER',
        order: 'amount'
    })
})

test('should generate text filter action with default', () => {
    const action = setTextFilterAction()
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: ''
    })
})

test('should generate text filter action without default', () => {
    const feh = 'feh'
    const action = setTextFilterAction(feh)
    expect(action).toEqual({
        type: 'SET_TEXT',
        text: feh
    })
})