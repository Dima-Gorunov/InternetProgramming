import {applyMiddleware, combineReducers, createStore} from "redux";
import TestReducer from "../Reducers/TestReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    Test: TestReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))
export default store
