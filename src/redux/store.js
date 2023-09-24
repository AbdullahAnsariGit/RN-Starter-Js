import { combineReducers } from "@reduxjs/toolkit";
import { createStore } from "redux";
// import createSagaMiddleware  from "redux-saga"
import { reducer } from "./reducers";


// const sagaMiddleWare = createSagaMiddleware()
const combineReducer = combineReducers({
    reducer: reducer,
    // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleWare) 
})
// sagaMiddleWare.run(fileURL)
const store = createStore(combineReducer);

export default store