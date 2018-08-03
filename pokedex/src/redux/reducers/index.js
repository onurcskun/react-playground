import {
    GET_POKEMONS_REQUEST,
    GET_POKEMONS_SUCCESS,
    GET_POKEMONS_FAILURE,
    SET_DISPLAY_FILTERED_STATUS,
    SET_DISPLAY_SELECTED_POKEMON
} from '../actions/index.js'
import {combineReducers} from 'redux'

const initialState = {
    isFetched: false,
    error: null,
    displayFiltered: false,
    displaySelectedStatus: false,
    pokemons: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case GET_POKEMONS_REQUEST:
            return {
                ...state,
                isFetched: true
            }
        case GET_POKEMONS_SUCCESS:
            return {
                ...state,
                isFetched: false,
                pokemons: action.payload.map(pokemon => ({
                    ...pokemon,
                    id: pokemon.url.substring(34, pokemon.url.length - 1)
                }))
            }
        case GET_POKEMONS_FAILURE:
            return {
                ...state,
                isFetched: false,
                error: action.payload
            }
        case SET_DISPLAY_FILTERED_STATUS:
            return {
                ...state,
                isFetched: false,
                displayFiltered: true,
                displaySelectedStatus: false
            }
        case SET_DISPLAY_SELECTED_POKEMON:
            return {
                ...state,
                isFetched: false,
                displayFiltered: false,
                displaySelectedStatus: true
            }
        default:
            return state
    }
}

export default combineReducers({
    reducer
})