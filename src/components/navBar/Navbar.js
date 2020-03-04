import React from 'react';
import { Link } from 'react-router-dom';
// import styled from 'styled-components';
import './navbar.scss';
import mud from './mud.jpg';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-left'>
        <img
          src={mud}
          alt='logo'
          style={{
            width: '50px',
            height: '50px',
            backgroundSize: 'contain'
          }}
        />
        <Link to='#' className='links'>
          Mud Games
        </Link>
      </div>
      <div className='navbar-right'>
        <Link to='/register'>Register</Link>
        <Link to='/'>Login</Link>
        {/* <Link to='/game'>Game</Link> */}
      </div>
    </div>
  );
};

export default Navbar;
