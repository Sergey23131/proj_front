import {combineReducers} from "redux";
import {usersReducer} from "./usersReducer";

export let rootReducer = combineReducers({usersReducer})