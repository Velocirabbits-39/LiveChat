import { bindActionCreators } from 'redux';
import * as types from '../constants/actionTypes';

//create intial state
const initialState = {
    inputMessage: '',
    previousMessageArray: []
}

const chatRoomReducer = (state = initialState, action) => {

    return {
        ...state,
    }

}







export default chatRoomReducer;