import selectExpensesTotal from  '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('should return 0 for no expenses', () => {
    const result = selectExpensesTotal( [] )
    expect(result).toEqual(0)
})

test('should return sum for a single expense', () => {
    const result = selectExpensesTotal( [expenses[0]] )
    expect(result).toEqual(195)
})

test('should return sum for a multiple expenses', () => {
    const result = selectExpensesTotal( expenses )
    expect(result).toEqual(149695)
})