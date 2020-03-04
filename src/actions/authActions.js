import axios from 'axios';

import {
    REGISTER_START,
    REGISTER_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    AUTH_ERROR
    // LOGOUT
} from './types';

// registration user
export const registerUser = register => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    console.log('register user', register);
    dispatch({ type: REGISTER_START });
    return axios
        .post(
            'https://mud-cs23-backend.herokuapp.com/api/registration/',
            register,
            config
        )
        .then(res => {
            console.log('register res', res.data);
            localStorage.setItem('token', res.data.key);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.key
            });
        })
        .catch(err => {
            console.log('register err', err);
            dispatch({
                type: AUTH_ERROR,
                payload: err.message
            });
        });
};

// login user
export const loginUser = creds => dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    console.log('login creds', creds);
    dispatch({ type: LOGIN_START });
    return axios
        .post(
            'https://mud-cs23-backend.herokuapp.com/api/login/',
            creds,
            config
        )
        .then(res => {
            console.log('loginUser res', res.data);
            localStorage.setItem('token', res.data.key);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data
            });
        })
        .catch(err => {
            console.log('login err', err);
            dispatch({
                type: AUTH_ERROR,
                payload: err.message
            });
        });
};

// logout
export const logoutUser = () => dispatch => {
    console.log(dispatch);
};
