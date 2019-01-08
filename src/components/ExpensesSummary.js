import React from 'react'
import { connect } from 'react-redux'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = (props) => {
    return (
        <div>
        {props.expenseCount > 0 ?
        <h1>
        Viewing {props.expenseCount} {props.expenseCount > 1 ? 'expenses' : 'expense'} totalling {numeral(props.expensesTotal/100).format('$0,0.00')}
        </h1>
        : ''
        }
        </div>
    )
}

const ConnectedExpensesSummary = connect((state) => {
    const selectedExpenses = getVisibleExpenses(state)
    return {
        expenseCount: selectedExpenses.length,
        expensesTotal: selectExpensesTotal(selectedExpenses)
    }

})(ExpensesSummary)

export default ConnectedExpensesSummary
