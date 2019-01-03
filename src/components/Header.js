import React from 'react';
import {Link, NavLink} from 'react-router-dom';

const Header = () =>{
    return (
        <header>
        <h1>Expensify</h1>
        <p>
        <NavLink to="/" activeClassName='is-active' exact={true}>Dashboard</NavLink>
        </p>
        <p>
        <NavLink to="/create" activeClassName='is-active'>Create Expense</NavLink>
        </p>
        <p>
        <NavLink to="/help" activeClassName='is-active'>Help</NavLink>
        </p>
        </header>
    )
}

export default Header