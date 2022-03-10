import "../styles.css";
import React, { useState } from "react";
import done from "../assets/done.svg";

const TodoItem = (props) => {
  const [inputMode, setInputMode] = useState(false);

  return (
    <div className="App1">
      <ul className="ulist">
        <div className="part1" style={{ display: "flex" }}>
          <div className="part1i">
            <div
              className={props.todos.completed ? "circlegreen" : "circle"}
              onClick={() => props.handleCheckboxChange(props.todos.id)}
            >
              {props.todos.completed ? (
                <img className="doneimg" src={done} alt="done" />
              ) : (
                <div></div>
              )}
            </div>
          </div>

          <div className="writtenpart">
            {inputMode ? (
              <input
                className="newtodocopy"
                value={props.todos.task}
                onChange={(e) =>
                  props.handleTodoEdit(e.target.value, props.todos.id)
                }
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setInputMode(false);
                  }
                }}
              />
            ) : (
              <div
                className={props.todos.completed ? "text-strike" : "text-none"}
                onClick={() => setInputMode(true)}
              >
                {props.todos.task}
              </div>
            )}
          </div>
          <div
            className="part2"
            onClick={() => props.handleTodoDelete(props.todos.id)}
          >
            x
          </div>
        </div>{" "}
      </ul>
    </div>
  );
};

export default TodoItem;
