import {Login_User, Logout_User} from '../../constants';

const initialState = {
  isUserLogin: false,
  user: null,
  currentProfile: {},
};

export const authReducer = (states = initialState, action) => {
  switch (action?.type) {
    case Login_User:
      return {
        ...states,
        isUserLogin: action?.payload,
      };

    case Logout_User:
      return {
        ...states,
        user: null,
        isUserLogin: false,
        currentProfile: {},
      };
    default:
      return states;
  }
};
