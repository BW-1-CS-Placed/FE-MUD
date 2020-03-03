import axiosWithAuth from '../utils/axiosWithAuth';

import {
    GET_ROOM_FAILURE,
    GET_ROOM_START,
    GET_ROOM_SUCCESS,
    INIT_FAILURE,
    INIT_START,
    INIT_SUCCESS,
    MOVE_FAILURE,
    MOVE_START,
    MOVE_SUCCESS
} from './types';

//INitialize Game
export const initGame = () => dispatch => {
    console.log(dispatch);
};

//Movement
export const makeMove = dir => dispatch => {
    console.log(dir, dispatch);
};

//Get all Rooms
export const getAllRooms = () => dispatch => {
    console.log(dispatch);
};
