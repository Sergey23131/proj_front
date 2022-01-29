import {
    UPDATE_USER,
    LOGOUT_USER,
    AUTH_USER,
    REFRESH_TOKEN,
    FORGOT_PASSWORD,
    SET_PASSWORD
} from '../actions/actionTypes'

export const authReducer = (state = {auth: []}, action) => {

    switch (action.type) {
        case AUTH_USER:
            return {...state, auth: [...action.payload]};
        case LOGOUT_USER:
            return {...state, auth: [...state.auth, action.payload]};
        case UPDATE_USER:
            return {...state, auth: [...action.payload]};
        case REFRESH_TOKEN:
            return {...state, auth: [...action.payload]};
        default:
            return state;
    }

}