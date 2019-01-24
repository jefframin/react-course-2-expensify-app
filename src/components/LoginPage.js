import React from 'react';
import { connect } from 'react-redux'
import { startLogin } from '../actions/auth'

export class LoginPage extends React.Component {

    render() {
      return (
        <div className="box-layout">
        <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify App</h1>
        <p>A place for your expenses.</p>
          <button className="button" onClick={this.props.authenticate}>Login with Google</button>
        </div>
        </div>
    )
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        authenticate: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)