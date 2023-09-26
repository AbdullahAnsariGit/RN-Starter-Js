import axios from 'axios';
import {
  FETCH_POSTS_BEGIN,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_FAILURE,
} from '../../constants';

export const fetchPostsBegin = () => ({
  type: FETCH_POSTS_BEGIN,
});

export const fetchPostsSuccess = posts => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = error => ({
  type: FETCH_POSTS_FAILURE,
  payload: error,
});

export const fetchPosts = data => {
  return dispatch => {
    dispatch(fetchPostsBegin());
    axios
      .post('https://jsonplaceholder.typicode.com/posts', data)
      .then(response => {
        dispatch(fetchPostsSuccess(response.data));
      })
      .catch(error => {
        dispatch(fetchPostsFailure(error.message));
      });
  };
};

