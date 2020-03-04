import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';
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
    console.log('register user', register);
    dispatch({ type: REGISTER_START });
    return axiosWithAuth()
        .post(
            'https://lambda-mud-test.herokuapp.com/api/registration/',
            register
        )
        .then(res => {
            console.log('register res', res.data);
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('UserName', res.data.UserName);
            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data.UserName
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
    console.log('login creds', creds);
    dispatch({ type: LOGIN_START });
    return axios
        .post('https://lambda-mud-test.herokuapp.com/api/login/', creds)
        .then(res => {
            console.log('loginUser', res);
            localStorage.setItem('token', res.data.key);
            localStorage.setItem('UserName', res.data.UserName);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: res.data.UserName
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
