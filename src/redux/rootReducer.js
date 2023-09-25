import {combineReducers} from 'redux';
import {reducer} from './reducers';
import {authReducer} from './reducers/authReducer';

export default combineReducers({
  authReducer,
  reducer,
});
