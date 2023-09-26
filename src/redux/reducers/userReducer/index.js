import {
  FETCH_USER_DATA_BEGIN,
  FETCH_USER_DATA_ERROR,
  FETCH_USER_DATA_SUCCESS,
} from '../../constants';

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };

    case FETCH_USER_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null,
      };

    default:
      return state;
  }
};

