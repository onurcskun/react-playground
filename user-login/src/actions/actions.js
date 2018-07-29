/*
*   action types
*/

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'
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