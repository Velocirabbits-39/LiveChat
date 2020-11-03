import { bindActionCreators } from 'redux';

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