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
    case "selectAll":
      var flag = 0;
      return [...action.todos].map((item) => {
        if (state.change === "no" || item.completed === false) {
          item.completed = true;
          flag = 1;
          if (getCompletedCount(action.todos) !== action.todos.length) {
            state.change = "yes";
          }
        }
        if (flag !== 1) {
          item.completed = false;
          state.change = "no";
        }
        return item;
      });
    default:
      return state;
  }
};
// export const getCompletedCount = (todos) =>
// todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);
// export const clearCompleted = (todos) =>
// setTodos([...todos].filter((item) => !item.completed));
// export function handleChange(event) {
// setTitle(event.target.value);
// }
// export function handleTodoEdit1(eventValue, clickedId) {
//   console.log(eventValue, clickedId);

//   setTodos(
//     [...todos].map((item) => {
//       if (item.id === clickedId) {
//         item.task = eventValue;
//       }
//       return item;
//     })
//   );
// }
// export function handleTodoDelete(clickedId) {
//   console.log(clickedId);
//   setTodos([...todos].filter((item) => item.id !== clickedId));
// }
// export function handleCheckboxChange(clickedId) {
//   setTodos(
//     [...todos].map((item) => {
//       if (item.id === clickedId) {
//         item.completed = !item.completed;
//       }
//       return item;
//     })
//   );
// }
