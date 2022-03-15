export function selectAll(todos) {
  // This is the action
  return {
    type: "SELECTALL",
    payload: todos,
  };
}
export function add(val) {
  return {
    type: "ADD",
    payload: val,
  };
}
export function handleInputChangeInRedux(val) {
  return {
    type: "HANDLE",
    payload: val,
  };
}
export function clearCompleted() {
  return {
    type: "CLEAR",
  };
}
export function handleTodoEdit1(eventValue, clickedId) {
  return {
    type: "EDIT",
    eventValue: eventValue,
    clickedId: clickedId,
  };
}
export function handleTodoDelete(clickedId) {
  return {
    type: "DELETE",
    clickedId: clickedId,
  };
}
export function handleCheckboxChange(clickedId) {
  console.log("clickedid", clickedId);
  return {
    type: "CHECKBOXCHANGE",
    clickedId: clickedId,
  };
}
export function set1() {
  return {
    type: "ALL",
  };
}
export function set2() {
  return {
    type: "ACTIVE",
  };
}
export function set3() {
  return {
    type: "COMPLETED",
  };
}

export const getCompletedCount = (todos) =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);
