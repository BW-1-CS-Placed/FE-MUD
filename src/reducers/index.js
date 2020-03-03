import { combineReducers } from 'redux';
import authReducer from './authReducer';

export default combineReducers({
    auth: authReducer,
    game: gameReducers,
    player: playerReducer,
    room: roomReducer
});
