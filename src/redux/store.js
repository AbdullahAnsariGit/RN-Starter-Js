import {combineReducers} from '@reduxjs/toolkit';
import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './rootReducer';
// const combineReducer = combineReducers({
//   reducer: rootReducer,
//   // middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(sagaMiddleWare)
// });
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};
const sagaMiddleWare = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);

const enhancer = compose(applyMiddleware(sagaMiddleWare));
// sagaMiddleWare.run(fileURL)
// const store = createStore(combineReducer);
let store = createStore(persistedReducer, enhancer);
export let persistor = persistStore(store);

export default store;

// export default () => {
//     let store = createStore(persistedReducer)
//     let persistor = persistStore(store)
//     return { store, persistor }
//   }
