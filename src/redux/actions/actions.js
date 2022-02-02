import {GET_USERS} from "./actionTypes";

let fetchUsers = (value) => {
    return {type: GET_USERS, payload: value};
}

export {fetchUsers}