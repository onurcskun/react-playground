export const GET_POKEMONS_REQUEST = 'GET_POKEMONS_REQUEST'; 
export const GET_POKEMONS_SUCCESS = 'GET_POKEMONS_SUCCESS';
export const GET_POKEMONS_FAILURE = 'GET_POKEMONS_FAILURE';
export const FETCH_POKEMONS = 'FETCH_POKEMONS';
export const SET_DISPLAY_FILTERED_STATUS = 'SET_DISPLAY_FILTERED_STATUS';
export const SET_DISPLAY_SELECTED_POKEMON = 'SET_DISPLAY_SELECTED_POKEMON';

export function getPokemonsRequest() {
    return {type: GET_POKEMONS_FAILURE} 
}

export function getPokemonRequestSuccess(pokemons) {
    return {
        type: GET_POKEMONS_SUCCESS,
        payload: pokemons
    }
}

export function getPokemonRequestFailure(error) {
    return {type: GET_POKEMONS_FAILURE, payload: error.message}
}

export function setDisplayFilteredStatus() {
    return {type: SET_DISPLAY_FILTERED_STATUS}
}

export function setDisplaySelectedPokemon() {
    return {type: SET_DISPLAY_SELECTED_POKEMON}
}

export function fetchPokes() {
    return {type: FETCH_POKEMONS}
}