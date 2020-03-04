import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../actions/authActions';

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
        <Fragment>
            <div className='form-cont'>
                <h1>Register</h1>
                <form
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
                            <label>Password</label>
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                name='password2'
                                className='password'
                                onChange={handleChange}
                                value={infor.password2}
                            />
                        </div>
                    </div>
                    <div className='layout-w'>
                        <button type='submit' className='signUp-btn'>
                            Register
                        </button>
                    </div>
                </form>
            </div>
        </Fragment>
    );
};
export default Register;
