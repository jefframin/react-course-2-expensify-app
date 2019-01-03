import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilterAction, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {

    state = {
        calFocused: null
    }

    onDatesChange = ({ startDate, endDate }) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }

    onFocusChange = (calFocused) => {
        this.setState(() => {
            return {calFocused: calFocused}
        })
    }

    onTextChange = (event) => {
       this.props.setTextFilter(event.target.value)
    }

    onSortChange = (event) => {
        event.target.value == 'amount' ? this.props.sortByAmount() : this.props.sortByDate()
    }

    render() {

    return (
        <div>
          <input type="text" value={this.props.filters.text} onChange={this.onTextChange} />
          <select value={this.props.filters.order} onChange={this.onSortChange} >
            <option value='date'>Date</option>
            <option value='amount'>Amount</option>
          </select>
          <DateRangePicker
                startDate={this.props.filters.startDate}
                endDate={this.props.filters.endDate}
                onDatesChange={this.onDatesChange}
                focusedInput={this.state.calFocused}
                onFocusChange={this.onFocusChange}
                showClearDates={true}
                numberOfMonths={1}
                isOutsideRange={() => {return false}}
                >
          </DateRangePicker>
        </div>
    )
    }
}

const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setTextFilter: (text) => dispatch(setTextFilterAction(text)),
        sortByDate: () => dispatch(sortByDate()),
        sortByAmount: () => dispatch(sortByAmount()),
        setStartDate: (startDate) => dispatch(setStartDate(startDate)),
        setEndDate: (endDate) => dispatch(setEndDate(endDate))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)