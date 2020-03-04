import axiosWithAuth from '../utils/axiosWithAuth';

import {
    GET_ROOM_SUCCESS,
    GET_ROOM_START,
    GET_ROOM_FAILURE,
    POSITION,
    PLAYERS,
    ERROR_MSG,
    DESCRIPTION,
    TITLE
} from './types';

export const title = data => {
    return {
        type: TITLE,
        payload: data
    };
};

export const description = data => {
    return {
        type: DESCRIPTION,
        payload: data
    };
};

export const players = data => {
    return {
        type: PLAYERS,
        payload: data
    };
};

export const error_msg = data => {
    return {
        type: ERROR_MSG,
        payload: data
    };
};

export const position = data => dispatch => {
    dispatch({
        type: POSITION,
        payload: data
    });
};

//get all rooms
export const getAllRooms = () => dispatch => {
    console.log('getAllRooms', dispatch);
    dispatch({ type: GET_ROOM_START });
    return axiosWithAuth()
        .get('https://mud-cs23-backend.herokuapp.com/api/adv/get_map/')
        .then(res => {
            console.log('get all rooms', res);
            dispatch({
                type: GET_ROOM_SUCCESS,
                payload: res.data // res.data.UserName?
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: GET_ROOM_FAILURE,
                payload: err.message
            });
        });
};
