import "../src/styles.css";
import React from "react";
import AppRoutes from "./routes";
const App = (props) => {
  const getCompletedCount = (todos) =>
    todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

  return (
    <div className="App">
      <AppRoutes />

      {/* <Todo /> */}
    </div>
  );
};

export default App;
