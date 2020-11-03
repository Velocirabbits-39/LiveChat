import { bindActionCreators } from 'redux';

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