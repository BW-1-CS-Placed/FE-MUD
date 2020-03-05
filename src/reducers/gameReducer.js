import {
    INIT_FAILURE,
    INIT_START,
    INIT_SUCCESS,
    MOVE_FAILURE,
    MOVE_START,
    MOVE_SUCCESS
} from '../actions/types';

const initialState = {
    loading: false,
    player: { uuid: '', user: '' },
    currentRoom: {},
    players: [],
    rooms: [],
    error: '',
    position: [1, 1]
};

const gameReducers = (state = initialState, action) => {
    // console.log('gameReducer', action);
    switch (action.type) {
        case INIT_START:
        case MOVE_START:
            return {
                ...state,
                loading: true
            };
        case INIT_SUCCESS:
            return {
                loading: false,
                player: {
                    uuid: action.payload.uuid,
                    user: action.payload.user
                },
                currentRoom: {
                    title: action.payload.title,
                    description: action.payload.description
                },
                players: action.payload.players,
                error: ''
            };
        case MOVE_SUCCESS:
            return {
                ...state,
                loading: false,
                currentRoom: {
                    title: action.payload.title,
                    description: action.payload.description
                },
                players: action.payload.players,
                error: action.payload.error_msg,
                position: action.payload.position
            };
        case INIT_FAILURE:
        case MOVE_FAILURE:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};

export default gameReducers;
