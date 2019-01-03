import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'

export default class ExpenseForm extends React.Component {

    constructor(props) {
        super(props)

    this.state ={
        description: props.expense ? props.expense.description : '',
        note: props.expense ? props.expense.note : '',
        amount: props.expense ? (props.expense.amount / 100).toString() : '',
        created: props.expense ? moment(props.expense.created) : moment(),
        calFocused: false,
        error: false
    }
    }

    onDescriptionChange = (event) => {
        const desc = event.target.value
        this.setState(() => {return {description: desc}})
    }

    onNoteChange = (event) => {
        const note = event.target.value
        this.setState(() => {return {note: note}})
    }

    onAmountChange = (event) => {
        const amount = event.target.value
        if (!amount || amount.match(/^[1-9]\d*(\.\d{0,2})?$/)) {
            this.setState(() => {return {amount: amount}})
        }
    }

    onDateChange = (created) => {
        if (created) {
          this.setState(() => {return {created: created}})
        }
    }

    onCalFocusChange = ({focused}) => {
        this.setState(() => {return {calFocused: focused}})
    }

    onSubmit = (event) => {
        event.preventDefault();
        if (!this.state.description || !this.state.amount) {
          this.setState(() => {return {error: true}})
        }
        else {
          this.setState(() => {return {error: false}})
          this.props.onSubmit({
              description: this.state.description,
              amount: parseFloat(this.state.amount, 10) * 100,
              created: this.state.created.valueOf(),
              note: this.state.note
          })
        }
    }

    render() {
        return (
            <div>
            {this.state.error && <p>please provide both description and amount</p>}
            <form onSubmit={this.onSubmit}>
            <input type="text" 
                   placeholder="Description" 
                   autoFocus
                   value={this.state.description}
                   onChange={this.onDescriptionChange}></input>
            <input type="text" 
                   value={this.state.amount}
                   placeholder="Amount"
                   onChange={this.onAmountChange}></input>
            <SingleDatePicker date={this.state.created}
                              onDateChange={this.onDateChange}
                              focused={this.state.calFocused}
                              numberOfMonths={1}
                              isOutsideRange={() => {return false}}
                              onFocusChange={this.onCalFocusChange}/>
            <textarea placeholder="Add a note for your expense (optional)"
                      value={this.state.note}
                      onChange={this.onNoteChange}></textarea>
            <button>Save Expense</button>
            </form>
            </div>
        );
    }
}