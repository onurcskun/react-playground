import { USER_LOGIN_SUCCESS, USER_LOGIN_FAIL } from '../actions/actions'
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

export default combineReducers({
    user,
})