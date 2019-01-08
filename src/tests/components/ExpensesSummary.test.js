import React from 'react'
import { shallow } from 'enzyme'
import { ExpensesSummary } from '../../components/ExpensesSummary'
import expenses from '../fixtures/expenses'

test('should render expense summary for multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={1234}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should not render expense summary for empty list', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={0} expensesTotal={0}/>)
    expect(wrapper).toMatchSnapshot()
})

test('should render expense summary for one expense', () => {
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={14}/>)
    expect(wrapper).toMatchSnapshot()
})