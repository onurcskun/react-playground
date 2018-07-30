import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL, USER_REGISTER_SUCCESS, USER_REGISTER_FAIL } from '../actions/actions'
import { combineReducers } from 'redux';

function user(state = {loginStatus: null}, action) {
    switch(action.type) {
        case USER_LOGIN_SUCCESS:
            return {loginStatus: true};
        case USER_LOGIN_FAIL:
            return {loginStatus: false};
        default:
            return state;
    }
}

function newUser(state = {registerStatus: null}, action) {
    switch(action.type) {
        case USER_REGISTER_SUCCESS:
            return {registerStatus: true};
        case USER_REGISTER_FAIL:
            return {registerStatus: false};
        default:
            return state;
    }
}

export default combineReducers({
    user,
    newUser
})