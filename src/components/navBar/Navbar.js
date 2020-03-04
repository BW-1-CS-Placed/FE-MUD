import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Fragment>
            <Link to='/register'>Register</Link>
            <Link to='/'>Login</Link>
            {/* <Link to='/game'>Game</Link> */}
        </Fragment>
    );
};

export default Navbar;
