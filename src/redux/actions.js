import {Add_Product, Login_User, Remove_Product} from './constants';

export const addProduct = item => {
  return {
    type: Add_Product,
    payload: item,
  };
};

export const removeProduct = id => {
  return {
    type: Remove_Product,
    id: id,
  };
};

export const loginUser = item => {
  return {
    type: Login_User,
    id: item,
  };
};
