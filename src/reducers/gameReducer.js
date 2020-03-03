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
} from '../actions/types';

const initialState = {
    loading: false,
    player: { id: '', user: '' },
    currentRoom: {},
    players: [],
    rooms: [],
    error: '',
    position: [1, 1]
};

const gameReducers = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default gameReducers;
