import {createStore} from "redux";
import {rootReducer} from "../reducer/rootReducer";

export let store = createStore(rootReducer);