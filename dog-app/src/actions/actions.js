/*
    *types
*/

export const DOG_REQUEST = 'DOG_REQUEST';
export const DOG_REQUEST_SUCCESS = 'DOG_REQUEST_SUCCESS';
export const DOG_REQUEST_FAILURE = 'DOG_REQUEST_FAILURE';
export const FETCHED_DOG = 'FETCHED_DOG';

/*
    *creators
*/

export function dogRequest() {
    return {type: DOG_REQUEST}
}

export function dogRequestSuccess(data) {
    return {type: DOG_REQUEST_SUCCESS, url: data.message}
}

export function dogRequestFailure() {
    return {type: DOG_REQUEST_FAILURE}
}

export function fetchDog() {
    return {type: FETCHED_DOG}
}
