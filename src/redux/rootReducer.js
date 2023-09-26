import {combineReducers} from 'redux';
import {reducer} from './reducers';
import {authReducer} from './reducers/authReducer';
import {userReducer} from './reducers/userReducer';
import {postReducer} from './reducers/postReducer';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  product: reducer,
});
