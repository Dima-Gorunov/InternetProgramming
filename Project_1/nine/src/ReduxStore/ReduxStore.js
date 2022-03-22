import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
    HomePage:null
})


let store = createStore(reducers);

export default store