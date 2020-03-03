import { combineReducers } from 'redux';
import authReducer from './authReducer';
import gameReducer from './gameReducer';
import playerReducer from './playerReducer';
import roomReducer from './roomReducer';

export default combineReducers({
    auth: authReducer,
    game: gameReducer,
    player: playerReducer,
    room: roomReducer
});