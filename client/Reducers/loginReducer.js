import { bindActionCreators } from 'redux';
import * as types from '../constants/actionTypes';

//create intial state
const initialState = {
    password: '',
    username: '',
    isLoggedIn: false,
    loginError: ''
}

const loginReducer = (state = initialState, action) => {


    return {
        ...state,
    }
}




export default loginReducer;