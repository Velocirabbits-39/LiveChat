//to combine reducers
import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import chatRoomReducer from './chatRoomReducer';

// combine reducers
const reducers = combineReducers({
    // if we had other reducers, they would go here
    login: loginReducer,
    chatRoom: chatRoomReducer
});

// make the combined reducers available for import
export default reducers;


