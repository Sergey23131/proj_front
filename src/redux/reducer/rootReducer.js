import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";
import {authReducer} from "./authReducer";

export let rootReducer =combineReducers({usersReducer,authReducer})