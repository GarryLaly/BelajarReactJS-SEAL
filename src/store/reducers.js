import { SET_TODO_LIST } from "./actions";

export const todoList = (state = { data: [] }, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_TODO_LIST:
      return payload;

    default:
      return state;
  }
};
