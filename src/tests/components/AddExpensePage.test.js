import React from 'react'
import { shallow } from 'enzyme'
import { AddExpensePage } from '../../components/AddExpensePage'
import expenses from '../fixtures/expenses'

let addExpenseSpy, history, wrapper;

beforeEach(() => {
    addExpenseSpy = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<AddExpensePage startAddExpense={addExpenseSpy} history={history} />)
})

test('should render add expense page', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenLastCalledWith('/dashboard')
    expect(addExpenseSpy).toHaveBeenLastCalledWith(expenses[2])
})