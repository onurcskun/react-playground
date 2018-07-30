/*
*   action types
*/

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
export const USER_REGISTER_SUCCESS = 'USER_REGISTER_SUCCESS'
export const USER_REGISTER_FAIL = 'USER_REGISTER_FAIL'

/*
*   other const
*/

/*
* action creators
*/

export function userLoginSuccess() {
    return {
        type: USER_LOGIN_SUCCESS,
    }
}


export function userLoginFail() {
    return {
        type: USER_LOGIN_FAIL,
    }
}

export function userRegisterSuccess() {
    return {
        type: USER_REGISTER_SUCCESS,
    }
}

export function userRegisterFail() {
    return {
        type: USER_REGISTER_FAIL,
    }
}
