import React from 'react';
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export class LoginPage extends React.Component {

    render() {
      return (
        <div>
          <button onClick={this.props.authenticate}>Login</button>
        </div>
    )
    }
}

/*
const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => {
            return expense.id === props.match.params.id
        }) 
    }
}
*/

const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)