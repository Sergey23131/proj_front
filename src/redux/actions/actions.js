import {
    GET_USERS,
    GET_USERS_BY_ID,
    POST_USER,
    DELETE_USER,
    UPDATE_USER,
    LOGOUT_USER,
    AUTH_USER,
    REFRESH_TOKEN,
    FORGOT_PASSWORD,
    SET_PASSWORD
} from "./actionTypes"

let fetchUsers = (value) => {
    return {type: GET_USERS, payload: value};
}

let fetchUserByID = (value) => {
    return {type: GET_USERS_BY_ID, payload: value};
}

let fetchUserPost = (value) => {
    return {type: POST_USER, payload: value};
}

let fetchUserDelete = (value) => {
    return {type: DELETE_USER, payload: value};
}

let fetchUserUpdate = (value) => {
    return {type: UPDATE_USER, payload: value};
}

let fetchUserLogout = (value) => {
    return {type: LOGOUT_USER, payload: value};
}

let fetchUserLogin = (value) => {
    return {type: AUTH_USER, payload: value};
}

let fetchForgotPassword = (value) => {
    return {type: FORGOT_PASSWORD, payload: value};
}

let fetchSetPassword = (value) => {
    return {type: SET_PASSWORD, payload: value};
}

let fetchRefreshToken = (value) => {
    return {type: REFRESH_TOKEN, payload: value};
}

export {
    fetchRefreshToken,
    fetchSetPassword,
    fetchForgotPassword,
    fetchUserLogin,
    fetchUserDelete,
    fetchUserLogout,
    fetchUserUpdate,
    fetchUserPost,
    fetchUserByID,
    fetchUsers
}