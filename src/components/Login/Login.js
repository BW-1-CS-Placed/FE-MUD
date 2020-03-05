import React, {  useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/authActions';
import { NavLink } from 'react-router-dom';

const Login = props => {
    //use local state to grab users login in info
    const [infor, setInfor] = useState({
        username: '',
        password: ''
    });
    const dispatch = useDispatch();
    //handle for changes
    const handleChange = e => {
        // console.log('login handlechange', e);
        setInfor({ ...infor, [e.target.name]: e.target.value });
    };
    // handle submit
    const handleSubmit = e => {
        // console.log(e)
        e.preventDefault();
        dispatch(loginUser(infor));
    };
    return (
      <div className='Form-Container'>
        <h1 className='title'>Login</h1>
        <form
          onSubmit={e => {
            handleSubmit(e);
          }}
        >
          <div className='input-Wrapper'>
            <div className='input-layout'>
              <label>Username</label>
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
                name='password'
                className='password'
                onChange={handleChange}
                value={infor.password}
              />
            </div>
            <button type='submit' className='signIn-btn'>
              Login
            </button>
            {/* <div className='register-container'>
              Dont have an account  <NavLink to='/register' activeStyle={{ color: 'white' }}>
                Register
        </NavLink>
            </div> */}
          </div>
          
        </form>
      </div>
    );
};
export default Login;
