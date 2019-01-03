import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expenses'

test('should render ExpenseForm correctly', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseForm item with expense', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render error for invalid submission', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    //expect(wrapper.state('error').length).toBeGreaterThan(1)
    expect(wrapper.state('error')).toEqual(true)
    expect(wrapper).toMatchSnapshot()
})

test('should set description on input change', () => {
    const value = "new desc"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change', {target: { value }})
    expect(wrapper.state('description')).toBe(value)
})

test('should set note on input change', () => {
    const value = "new note"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change', {target: { value }})
    expect(wrapper.state('note')).toBe(value)
})

test('should set amount if input valid', () => {
    const value = "23.50"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {target: { value }})
    expect(wrapper.state('amount')).toBe(value)
})

test('should not set amount if input invalid', () => {
    const value = "23.5012"
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change', {target: { value }})
    expect(wrapper.state('amount')).toBe('')
})

test('should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[1]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {preventDefault: () => {}})
    expect(wrapper.state('error')).toEqual(false)
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
      description: expenses[1].description,
      note: expenses[1].note,
      amount: expenses[1].amount,
      created: expenses[1].created
    })
})

test('should set new date on date change', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('created')).toEqual(now)
})

test('should set calFocused on focus change', () => {
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused: true})
    expect(wrapper.state('calFocused')).toEqual(true)
})