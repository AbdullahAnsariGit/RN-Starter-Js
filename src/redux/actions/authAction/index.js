import {Login_User, Logout_User} from '../../constants';

export const loginUser = item => {
  return {
    type: Login_User,
    payload: item,
  };
};

export const logoutUser = () => {
  return {
    type: Logout_User,
  };
};
