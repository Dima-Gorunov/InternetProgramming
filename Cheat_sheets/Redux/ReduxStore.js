

import {combineReducers, createStore} from "redux";
import HomePageReducer from "../Reducers/HomePageReducer";


let reducers = combineReducers({
    HomePage: HomePageReducer
})

let store=createStore(reducers);

export default store;