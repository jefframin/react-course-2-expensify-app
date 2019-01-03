import React from 'react'
import { Link } from 'react-router-dom';

const ExpenseListItem = ({id, description, amount, created}) => {
    return (
        <div>
          <h3>
          <Link to={`/edit/${id}`}>{description}</Link>
          </h3>
          <p>{amount} - {created}</p>
        </div>
    )
}

export default ExpenseListItem