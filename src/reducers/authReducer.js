import {
    REGISTER_START,
    REGISTER_SUCCESS,
    LOGIN_START,
    LOGIN_SUCCESS,
    AUTH_ERROR
    // LOGOUT
} from '../actions/types';

const initialState = {
    userName: '',
    loggingIn: false,
    error: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_START:
        case REGISTER_START:
            return {
                ...state,
                loggingIn: true
            };
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            return {
                ...state,
                loggingIn: false,
                userName: action.payload
            };
        case AUTH_ERROR:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
};
