import {takeEvery} from 'redux-saga'
import {put, call} from 'redux-saga/effects'
import { dogRequest, dogRequestSuccess, dogRequestFailure } from '../actions/actions';

export function* watchFetchDog() {
    yield takeEvery('FETCHED_DOG', fetchDogAsync);
}
  
export function* fetchDogAsync() {
    try {
        yield put(dogRequest());
        const data = yield call(() => {
            return fetch('https://dog.ceo/api/breeds/image/random')
                    .then(res => res.json())
        });
        yield put(dogRequestSuccess(data));
    } catch (error) {
        yield put(dogRequestFailure());
    }
}