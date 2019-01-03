import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm'
import { editExpenseAction } from '../actions/expenses'
import { removeExpenseAction } from '../actions/expenses'

export class EditExpensePage extends React.Component {
    onSubmit=(expense) => {
            this.props.editExpenseAction(this.props.expense.id, expense)
            this.props.history.push('/')
        }
    onClick=(event) => {
            this.props.removeExpenseAction({id: this.props.expense.id})
            this.props.history.push('/')
        }

    render() {
    return (
        <div>
          <ExpenseForm expense={this.props.expense}
                       onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
        </div>
    )
    }
}

/*
const EditExpensePage = (props) => {
    console.log(props)
    return (
        <div>
          <ExpenseForm expense={props.expense}
                        onSubmit={(expense) => {
            props.dispatch(editExpenseAction(props.expense.id, expense))
            props.history.push('/')
        }}/>
        <button onClick={(event) => {
            props.dispatch(removeExpenseAction({id: props.expense.id}))
            props.history.push('/')
        }}>Remove</button>
        </div>
    )
}
*/

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        }) 
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        editExpenseAction: (id, expense) => dispatch(editExpenseAction(id, expense)),
        removeExpenseAction: ({ id }) => dispatch(removeExpenseAction({ id }))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage)