import {Add_Todo, Delete_Todo, Edit_Todo} from '../../constants';

export const AddAction = item => ({
  type: Add_Todo,
  payload: item,
});

export const DeleteTodo = id => ({
  type: Delete_Todo,
  id: id,
});

export const EditTodo = item => ({
  type: Edit_Todo,
  payload: item,
});
