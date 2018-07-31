import {
    DOG_REQUEST,
    DOG_REQUEST_SUCCESS,
    DOG_REQUEST_FAILURE 
} from '../actions/actions'
import { combineReducers } from 'redux'

const initialState = {
    url: '',
    loading: false,
    error: false
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case DOG_REQUEST:
            return {
                url: '',
                loading: true,
                error: false
            }
        case DOG_REQUEST_SUCCESS:
            return {
                url: action.url,
                loading: false,
                error: false
            }
        case DOG_REQUEST_FAILURE:
            return {
                url: '',
                loading: false,
                error: true
            }
        default:
            return state;        
    }
}

export default combineReducers({
    reducer
})