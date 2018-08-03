import {put, takeEvery} from 'redux-saga/effects'
import { getPokemonsRequest, getPokemonRequestFailure, getPokemonRequestSuccess } from '../redux/actions/index';
import axios from 'axios'

export function* watchFetchPokes() {
    yield takeEvery('FETCH_POKEMONS', fetchPokesAsync);
}

export function* fetchPokesAsync() {
    try {
        yield put(getPokemonsRequest());
        const res = yield axios.get('https://pokeapi.co/api/v2/pokemon/?limit=784')
        yield put(getPokemonRequestSuccess(res.data.results));
    } catch(error) {
        yield put(getPokemonRequestFailure(error.message));
    }
}