import { SET_TODO_LIST } from "./actions";

export const setTodoList = (user) => ({
  type: SET_TODO_LIST,
  payload: user,
});
