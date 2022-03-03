import "../styles.css";
import React, { useState } from "react";
import done from "../assets/done.svg";

const TodoItem = (props) => {
  const [inputMode, setInputMode] = useState(false);

  return (
    <div className="App1">
      <ul className="ulist">
        <div className="part1" style={{ display: "flex" }}>
          <div class="part1i">
            <div
              className={props.completed ? "circlegreen" : "circle"}
              onClick={props.handleCheckboxChange}
            >
              {props.completed ? (
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
                value={props.value}
                onChange={props.onChange}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    setInputMode(false);
                  }
                }}
              />
            ) : (
              <div
                className={props.completed ? "text-strike" : "text-none"}
                onClick={() => setInputMode(true)}
              >
                {props.title}
              </div>
            )}
          </div>
          <div className="part2" onClick={props.onClick}>
            x
          </div>
        </div>{" "}
      </ul>
    </div>
  );
};
export default TodoItem;
