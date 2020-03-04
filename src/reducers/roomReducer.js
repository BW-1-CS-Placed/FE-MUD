import {
    DESCRIPTION,
    TITLE,
    ERROR_MSG,
    POSITION,
    PLAYERS,
    GET_ROOM_FAILURE,
    GET_ROOM_SUCCESS,
    GET_ROOM_START
} from '../actions/types';

const initialState = {
    title: '',
    description: '',
    players: [],
    error_msg: '',
    position: [1, 1],
    rooms: []
};

const roomReducer = (state = initialState, action) => {
    console.log('roomReducer', action);
    switch (action.type) {
        case TITLE:
            return ({ ...state } = action.payload);
        case DESCRIPTION:
            return { ...(state = action.payload) };
        case PLAYERS:
            return { ...(state = action.payload) };
        case ERROR_MSG:
            return { ...(state = action.payload) };
        case POSITION:
            return { ...state, position: action.payload };
        case GET_ROOM_START:
            return { ...state };
        case GET_ROOM_SUCCESS:
            return { ...state, rooms: action.payload };
        case GET_ROOM_FAILURE:
            return {
                ...state,
                error_msg: action.payload
            };
        default:
            return state;
    }
};

export default roomReducer;
