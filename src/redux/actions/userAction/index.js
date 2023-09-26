import axios from 'axios';
import {
  FETCH_USER_DATA_BEGIN,
  FETCH_USER_DATA_ERROR,
  FETCH_USER_DATA_SUCCESS,
} from '../../constants';

export const fetchUserDataBegin = () => ({
  type: FETCH_USER_DATA_BEGIN,
});

export const fetchUserDataSuccess = data => ({
  type: FETCH_USER_DATA_SUCCESS,
  payload: data,
});

export const fetchUserDataError = error => ({
  type: FETCH_USER_DATA_ERROR,
  payload: error,
});

export const fetchUserData = () => {
  return dispatch => {
    dispatch(fetchUserDataBegin());

    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log("🚀 ~ file: index.js:29 ~ fetchUserData ~ response:", response?.data)
        dispatch(fetchUserDataSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchUserDataError(error));
      });
  };
};


