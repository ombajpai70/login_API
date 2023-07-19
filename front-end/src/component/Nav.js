import React from 'react';
import { Link } from 'react-router-dom';

const Nav=()=>{
    return(
        <div>
            <ul>
                <li><Link to="/">Logout</Link></li>
                <li><Link to="/signup">Sign Up</Link></li>
               
            </ul>
        </div>
    )
}

export default Nav;