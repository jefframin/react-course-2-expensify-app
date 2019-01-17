import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let editExpenseSpy, removeExpenseSpy, history, wrapper;

beforeEach(() => {
    editExpenseSpy = jest.fn()
    removeExpenseSpy = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage startEditExpense={editExpenseSpy}
                                       startRemoveExpense={removeExpenseSpy}
                                       history={history} 
                                       expense={expenses[0]}/>)
})

test('should render edit expense page', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(editExpenseSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
})

test('should handle remove expense', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpenseSpy).toHaveBeenLastCalledWith({ id: expenses[0].id })
})