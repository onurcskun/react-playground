import {takeEvery} from 'redux-saga'
import {put} from 'redux-saga/effects'
import { dogRequest, dogRequestSuccess, dogRequestFailure } from '../actions/actions';
import axios from 'axios'

export function* watchFetchDog() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
}

export function* fetchDogAsync() {
    try {
        yield put(dogRequest());
        const res = yield axios.get('https://dog.ceo/api/breeds/image/random')
        yield put(dogRequestSuccess(res.data));
    } catch (error) {
        yield put(dogRequestFailure());
    }
}