import uuid from "react-uuid";

// Action value
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const TOGGLE_TODO = "TOGGLE_TODO";

//Action Creator
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  };
};

export const toggleTodo = (payload) => {
  return {
    type: TOGGLE_TODO,
    payload,
  };
};

// 초기 상태값
const initialState = {
  todos: [
    {
      id: uuid(),
      title: "리액트",
      contents: "리액트 숙련 화이팅!",
      isDone: false,
    },
    {
      id: uuid(),
      title: "리덕스",
      contents: "리덕스 어렵다",
      isDone: true,
    },
  ],
};

// reducer
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state, // 없어도 되지만 혹시나..
        todos: [...state.todos, action.payload],
      };
    case DEL_TODO: {
      const newTodos = state.todos.filter(
        (filteredTodo) => filteredTodo.id !== action.payload
      );
      return { todos: newTodos };
    }
    case TOGGLE_TODO: {
      const newTodo = state.todos.filter(
        (todo) => todo.id === action.payload
      )[0];
      newTodo.isDone = !newTodo.isDone;
      const filteredTodo = state.todos.filter(
        (todo) => todo.id !== action.payload
      );
      return {
        todos: [...filteredTodo, newTodo],
      };
    }
    default:
      return state;
  }
};

export default todos;
