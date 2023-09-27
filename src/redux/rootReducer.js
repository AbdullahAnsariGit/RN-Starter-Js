import {combineReducers} from 'redux';
import {reducer} from './reducers';
import {authReducer} from './reducers/authReducer';
import {userReducer} from './reducers/userReducer';
import {postReducer} from './reducers/postReducer';
import {AddReducer} from './reducers/AddTodoReducer';

export default combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
  todo: AddReducer,
  product: reducer,
});
