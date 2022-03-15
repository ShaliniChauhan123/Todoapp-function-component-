import "../src/styles.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Todo from "./Todo";
import Me from "./Me";

const App = (props) => {
  const getCompletedCount = (todos) =>
    todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact={true} element={<Todo />} />
          <Route path="/shalini" element={<Me />} />
        </Routes>
      </Router>

      {/* <Todo /> */}
    </div>
  );
};

export default App;
