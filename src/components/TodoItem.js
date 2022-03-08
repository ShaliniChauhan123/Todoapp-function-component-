import "../styles.css";
import React, { useState } from "react";
import done from "../assets/done.svg";
import { connect } from "react-redux";

import {
  add,
  selectAll,
  handleInputChangeInRedux,
  handleCheckboxChange,
  handleTodoDelete,
  handleTodoEdit1,
  clearCompleted,
} from "../actions/actions";

const TodoItem = (props) => {
  const [inputMode, setInputMode] = useState(false);

  return (
    <div className="App1">
      <ul className="ulist">
        <div className="part1" style={{ display: "flex" }}>
          <div class="part1i">
            <div
              className={props.todos.completed ? "circlegreen" : "circle"}
              onClick={() => props.handleCheckboxChange(props.todos.id)}
            >
              {console.log("Qw", props.completed, props.todos.completed)}
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
                  props.handleTodoEdit1(e.target.value, props.todos.id)
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
const mapStateToProps = (store) => {
  return {
    todos1: store.rootReducer.todos,
  };
};

const mapDispatchToProps = (dispatch) => ({
  selectAll: (val) => {
    dispatch(selectAll(val));
  },
  handleInputChangeInRedux: (val) => {
    dispatch(handleInputChangeInRedux(val));
  },

  add: (val) => {
    dispatch(add(val));
  },
  handleCheckboxChange: (val) => {
    dispatch(handleCheckboxChange(val));
  },
  handleTodoDelete: (val) => {
    dispatch(handleTodoDelete(val));
  },
  handleCheckboxChange: (val) => {
    dispatch(handleCheckboxChange(val));
  },
  handleTodoEdit1: (val, val1) => {
    dispatch(handleTodoEdit1(val, val1));
  },
  clearCompleted: () => {
    dispatch(clearCompleted());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
