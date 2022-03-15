import { v4 as uuidv4 } from "uuid";
const initState = {
  todos: [],
  mode: "All",
  title: "",
  change: "no",
};
const getCompletedCount = (todos) =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "SELECTALL":
      var flag = 0;

      return {
        ...state,
        todos: [...state.todos].map((item) => {
          if (state.change === "no" || item.completed === false) {
            item.completed = true;
            flag = 1;
            if (getCompletedCount(state.todos) !== state.todos.length) {
              state.change = "yes";
            }
          }

          if (flag !== 1) {
            item.completed = false;
            if (getCompletedCount(state.todos) === state.todos.length) {
              state.change = "no";
            }
          }
          return item;
        }),
        change: state.change,
      };
    case "HANDLE":
      return {
        ...state,
        title: action.payload,
      };

    case "ADD":
      let newTask = {
        task: action.payload,
        id: uuidv4(),
        completed: false,
      };
      return {
        ...state,
        todos: [...state.todos, newTask],
        title: "",
        change: "no",
      };
    case "CLEAR":
      return {
        ...state,
        todos: [...state.todos].filter((item) => !item.completed),
      };
    case "EDIT":
      return {
        ...state,
        todos: [...state.todos].map((item) => {
          if (item.id === action.clickedId) {
            item.task = action.eventValue;
          }
          return item;
        }),
      };
    case "DELETE":
      return {
        ...state,
        todos: [...state.todos].filter((item) => item.id !== action.clickedId),
      };
    case "CHECKBOXCHANGE":
      return {
        ...state,
        todos: [...state.todos].map((item) => {
          if (item.id === action.clickedId) {
            item.completed = !item.completed;
          }

          return item;
        }),
        change:
          getCompletedCount(state.todos) === state.todos.length ? "yes" : "no",
      };

    case "ALL":
      return {
        ...state,
        mode: "All",
      };
    case "ACTIVE":
      return {
        ...state,
        mode: "Active",
      };
    case "COMPLETED":
      return {
        ...state,
        mode: "Completed",
      };

    default:
      return state;
  }
};
export default rootReducer;
