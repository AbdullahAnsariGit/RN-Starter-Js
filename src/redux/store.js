// import {combineReducers} from '@reduxjs/toolkit';
// import {applyMiddleware, compose, createStore} from 'redux';
// import {persistStore, persistReducer} from 'redux-persist';
// import createSagaMiddleware from 'redux-saga';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import rootReducer from './rootReducer';

// const persistConfig = {
//   key: 'root',
//   storage: AsyncStorage,
// };
// const sagaMiddleWare = createSagaMiddleware();
// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const enhancer = compose(applyMiddleware(sagaMiddleWare));

// let store = createStore(persistedReducer, enhancer);
// export let persistor = persistStore(store);

// export default store;

import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = compose(applyMiddleware(thunk));

let store = createStore(persistedReducer, enhancer);
export let persistor = persistStore(store);

export default store;
