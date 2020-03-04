import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to='#' className='links'>
          Mud Games
        </NavLink>
      </div>
      <div className='navbar-right'>
        <NavLink to='/register' activeStyle={{ color: 'white' }}>
          Register
        </NavLink>
        <div>***</div>
        <NavLink to='/' activeStyle={{ color: 'white' }}>
          Login
        </NavLink>
        <div>***</div>
        <NavLink to='/game' activeStyle={{ color: 'white' }}>
          Game
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
