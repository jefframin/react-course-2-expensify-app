import React from 'react';
import {Link} from 'react-router-dom';

const NotFound = () =>{
    return (
        <div>
        404!
        <p>
        <Link to="/">go to dashboard</Link>
        </p>
        </div>
    )
}

export default NotFound