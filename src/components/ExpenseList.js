import React from 'react'
import { connect } from 'react-redux'
import ExpenseListItem from './ExpenseListItem'
import selectExpenses from '../selectors/expenses'

export const ExpenseList = (props) => {
    return (
        <div>
        {
            props.expenses.length === 0 ? (
                <p>no expenses</p>
            ) : (
                props.expenses.map((expense) => {
                   return <ExpenseListItem key={expense.id} {...expense}/>
                }) 
            )
        }
        </div>

    )
}

const ConnectedExpenseList = connect((state) => {
    return {
        expenses: selectExpenses(state)
    }

})(ExpenseList)

export default ConnectedExpenseList