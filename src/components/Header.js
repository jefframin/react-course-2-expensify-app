import React from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux'
import { startLogout } from '../actions/auth'

export const Header = ({ startLogout }) => {
    return (
        <header>
        <h1>Expensify</h1>
        <p>
        <NavLink to="/dashboard" activeClassName='is-active' exact={true}>Dashboard</NavLink>
        </p>
        <p>
        <NavLink to="/create" activeClassName='is-active'>Create Expense</NavLink>
        </p>
        <p>
        <button onClick={startLogout}>Logout</button>
        </p>
        </header>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogout: () => dispatch(startLogout())
    }
}

export default connect(undefined, mapDispatchToProps)(Header)
