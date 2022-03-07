export function selectAll(todos) {
  // This is the action
  return {
    type: "selectAll",
    todos: todos,
  };
}
export const getCompletedCount = (todos) =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);
