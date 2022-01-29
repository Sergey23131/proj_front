import {
    GET_USERS,
    GET_USERS_BY_ID,
    POST_USER,
    DELETE_USER
} from '../actions/actionTypes'

export const usersReducer = (state = {users: []}, action) => {

    switch (action.type) {
        case GET_USERS:
            return {...state, users: [...action.payload]};
        case POST_USER:
            return {...state, users: [...state.users, action.payload]};
        case DELETE_USER:
            return {...state, users: [...action.payload]};
        default:
            return state;
    }

}

