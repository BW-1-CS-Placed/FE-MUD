import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import { NavLink } from 'react-router-dom';
import './register.scss';

const Register = props => {
    //use local state to grab users login in info
    const [infor, setInfor] = useState({
        username: '',
        password1: '',
        password2: ''
    });
    const dispatch = useDispatch();
    //handle for changes
    const handleChange = e => {
        // console.log(e)
        setInfor({ ...infor, [e.target.name]: e.target.value });
    };
    // handle submit
    const handleSubmit = e => {
        // console.log(e)
        e.preventDefault();
        dispatch(registerUser(infor));
    };
    return (
      <div className='Form-Container'>
        <h1 className='title'>Sign Up</h1>
        <form
          className='Login-Form-Wrapper'
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <div className='input-Wrapper'>
            <div className='input-layout'>
              <label>Name</label>
              <input
                type='text'
                placeholder='Username'
                name='username'
                className='username'
                onChange={handleChange}
                value={infor.username}
              />
              <label>Password</label>
              <input
                type='password'
                placeholder='Password'
                name='password1'
                className='password'
                onChange={handleChange}
                value={infor.password1}
              />
              <label>Confirm Password</label>
              <input
                type='password'
                placeholder='Confirm Password'
                name='password2'
                className='password'
                onChange={handleChange}
                value={infor.password2}
              />
            </div>
            <button type='submit' className='signup-btn'>
              {' '}
              Register
            </button>
            {/* <div className='register-container'>
              <NavLink to='/' activeStyle={{ color: 'blue' }}>
                Login Here
        </NavLink>
            </div> */}
            
          </div>

          
        </form>
      </div>
    );
};
export default Register;
