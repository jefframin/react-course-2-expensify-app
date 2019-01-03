import React from 'react';
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { addExpenseAction } from '../actions/expenses'

export class AddExpensePage extends React.Component {
    onSubmit=(expense) => {
            this.props.addExpense(expense)
            this.props.history.push('/')
    }
    render() {
    return (
        <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={this.onSubmit} />
        </div>
    )
    }
}

/*
const AddExpensePage = (props) => {
    return (
        <div>
        <h1>Add Expense</h1>
        <ExpenseForm onSubmit={(expense) => {
            props.onSubmit(expense)
            props.history.push('/')
        }}/>
        </div>
    )
}
*/

const mapDispatchToProps = (dispatch) => {
    return {
        addExpense: (expense) => dispatch(addExpenseAction(expense))
    }
}

export default connect(undefined, mapDispatchToProps)(AddExpensePage)