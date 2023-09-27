import {Add_Todo, Delete_Todo} from '../../constants';
const initialState = [];

export const AddReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Todo:
      return [...state, action?.payload];
    case Delete_Todo:
      let updatedTodo = state.filter(item => {
        return item.id !== action?.id;
      })
      console.log('updatedTodo', updatedTodo);
      return [...updatedTodo];
    default:
      return state;
  }
};
