import axiosWithAuth from '../utils/axiosWithAuth';

import {
    INIT_FAILURE,
    INIT_START,
    INIT_SUCCESS,
    MOVE_FAILURE,
    MOVE_START,
    MOVE_SUCCESS
} from './types';

//INitialize Game
export const initGame = () => dispatch => {
    console.log('init game', dispatch);
    dispatch({ type: INIT_START });
    return axiosWithAuth()
        .get('https://lambda-mud-test.herokuapp.com/api/init')
        .then(res => {
            console.log('init get', res);
            dispatch({
                type: INIT_SUCCESS,
                payload: res.data // res.data.UserName?
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: INIT_FAILURE,
                payload: err.message
            });
        });
};

//Movement
export const makeMove = dir => dispatch => {
    console.log(dir, dispatch);
};
