import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import numeral from 'numeral'
import getVisibleExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpensesSummary = (props) => {
    return (
        <div className="page-header">
          <div className='content-container'>
           {props.expenseCount > 0 ?
            <h1 className="page-header__title">
              Viewing <span>{props.expenseCount}</span> {props.expenseCount > 1 ? 'expenses' : 'expense'} totalling <span>{numeral(props.expensesTotal/100).format('$0,0.00')}</span>
            </h1>
            : ''
           }
            <div className="page-header__actions">
              <Link className="button" to="/create">Add Expense</Link>
            </div>
          </div>
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
