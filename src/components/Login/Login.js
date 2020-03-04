import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../actions/authActions';

const Login = props => {
    //use local state to grab users login in info
    const [infor, setInfor] = useState({
        username: '',
        password: ''
    });
    const dispatch = useDispatch();
    //handle for changes
    const handleChange = e => {
        console.log('login handlechange', e);
        setInfor({ ...infor, [e.target.name]: e.target.value });
    };
    // handle submit
    const handleSubmit = e => {
        // console.log(e)
        e.preventDefault();
        dispatch(loginUser(infor));
    };
    return (
        <Fragment>
            <div className='form-cont'>
                <h1>Login</h1>
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
                    </div>
                    <div className='layout-w'>
                        <button type='submit' className='signIn-btn'>
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};
export default Login;
