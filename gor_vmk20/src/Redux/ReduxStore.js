import AppReducer from "../Reducers/AppReducer";
import {combineReducers, createStore} from "redux";


const reducers = combineReducers({
    App: AppReducer
})

const store = createStore(reducers)

export default store

