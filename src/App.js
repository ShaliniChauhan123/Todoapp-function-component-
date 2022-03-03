import "../src/styles.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";
import expandMore from "./assets/expandMore.svg";
import expandMore1 from "./assets/expandMore1.svg";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [mode, setMode] = useState("All");
  const [title, setTitle] = useState("");
  const [change, setChange] = useState("no");

  function selectAll(todos) {
    var flag = 0;

    setTodos(
      [...todos].map((item) => {
        if (change === "no" || item.completed === false) {
          item.completed = true;
          flag = 1;
          if (getCompletedCount(todos) !== todos.length) {
            setChange("yes");
          }
        }

        if (flag !== 1) {
          item.completed = false;
          setChange("no");
        }

        return item;
      })
    );
  }
  const getCompletedCount = (todos) =>
    todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);
  const clearCompleted = (todos) =>
    setTodos([...todos].filter((item) => !item.completed));
  function handleChange(event) {
    setTitle(event.target.value);
  }
  function handleTodoEdit1(eventValue, clickedId) {
    console.log(eventValue, clickedId);

    setTodos(
      [...todos].map((item) => {
        if (item.id === clickedId) {
          item.task = eventValue;
        }
        return item;
      })
    );
  }

  function handleTodoDelete(clickedId) {
    console.log(clickedId);
    setTodos([...todos].filter((item) => item.id !== clickedId));
  }
  function handleCheckboxChange(clickedId) {
    setTodos(
      [...todos].map((item) => {
        if (item.id === clickedId) {
          item.completed = !item.completed;
        }
        return item;
      })
    );
  }

  return (
    <div className="App">
      <h1 className="header">todos</h1>
      <div className="body1">
        <div className="division">
          <div className="first">
            {todos.length >= 1 ? (
              <div>
                {change === "no" &&
                getCompletedCount(todos) !== todos.length ? (
                  <img
                    onClick={() => selectAll(todos)}
                    src={expandMore}
                    alt="expandMore"
                  />
                ) : (
                  <img
                    onClick={() => selectAll(todos)}
                    src={expandMore1}
                    alt="expandMore1"
                  />
                )}
              </div>
            ) : (
              <div></div>
            )}
          </div>
          <div className="second">
            <input
              className="newtodo"
              value={title}
              placeholder="What needs to be done?"
              onChange={handleChange}
              onKeyPress={(e) => {
                if (e.key === "Enter" && title.length >= 1) {
                  let newTask = {
                    task: title,
                    id: uuidv4(),
                    completed: false,
                  };

                  setTodos([...todos, newTask]);
                  setTitle("");
                  setChange("no");
                }
              }}
            />
          </div>
        </div>
        {mode === "All" ? (
          todos.map((todoDetail) => {
            return (
              <div>
                <TodoItem
                  key={todoDetail.id}
                  completed={todoDetail.completed}
                  title={todoDetail.task}
                  onClick={() => handleTodoDelete(todoDetail.id)}
                  value={todoDetail.task}
                  onChange={(e) =>
                    handleTodoEdit1(e.target.value, todoDetail.id)
                  }
                  handleCheckboxChange={() =>
                    handleCheckboxChange(todoDetail.id)
                  }
                  selectAll={() => selectAll(todos)}
                />
              </div>
            );
          })
        ) : (
          <div>
            {[
              ...todos.filter((t) =>
                mode === "Active" ? t.completed === false : t.completed === true
              ),
            ].map((todoDetail) => {
              return (
                <div>
                  <TodoItem
                    key={todoDetail.id}
                    completed={todoDetail.completed}
                    title={todoDetail.task}
                    onClick={() => handleTodoDelete(todoDetail.id)}
                    value={todoDetail.task}
                    onChange={(e) =>
                      handleTodoEdit1(e.target.value, todoDetail.id)
                    }
                    handleCheckboxChange={() =>
                      handleCheckboxChange(todoDetail.id)
                    }
                  />
                </div>
              );
            })}
          </div>
        )}
        <Footer
          getCompletedCount={getCompletedCount(todos)}
          todos={todos}
          change={change}
          mode={mode}
          clearCompleted={() => clearCompleted(todos)}
          set1={() => setMode("All")}
          set2={() => setMode("Active")}
          set3={() => setMode("Completed")}
        />
      </div>
    </div>
  );
};
export default App;
