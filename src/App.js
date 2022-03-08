import "../src/styles.css";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { connect } from "react-redux";

import TodoItem from "./components/TodoItem";
import Footer from "./components/Footer";
import expandMore from "./assets/expandMore.svg";
import expandMore1 from "./assets/expandMore1.svg";
import {
  add,
  selectAll,
  handleInputChangeInRedux,
  handleCheckboxChange,
  handleTodoDelete,
  handleTodoEdit1,
  clearCompleted,
} from "./actions/actions";

const App = (props) => {
  const getCompletedCount = (todos) =>
    todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

  return (
    <div className="App">
      <h1 className="header">todos</h1>
      <div className="body1">
        <div className="division">
          <div className="first">
            {props.todos.length >= 1 ? (
              <div>
                {getCompletedCount(props.todos) !== props.todos.length ? (
                  <img
                    onClick={() => props.selectAll(props.todos)}
                    src={expandMore}
                    alt="expandMore"
                  />
                ) : (
                  <img
                    onClick={() => props.selectAll(props.todos)}
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
              value={props.title}
              placeholder="What needs to be done?"
              onChange={(e) => props.handleInputChangeInRedux(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && props.title.length >= 1) {
                  props.add(props.title);
                }
              }}
            />
          </div>
        </div>
        {props.mode === "All" ? (
          props.todos.map((todoDetail) => {
            return (
              <div>
                <TodoItem key={todoDetail.id} todos={todoDetail} />
              </div>
            );
          })
        ) : (
          <div>
            {[
              ...props.todos.filter((t) =>
                props.mode === "Active"
                  ? t.completed === false
                  : t.completed === true
              ),
            ].map((todoDetail) => {
              return (
                <div>
                  <TodoItem key={todoDetail.id} todos={todoDetail} />
                </div>
              );
            })}
          </div>
        )}
        <Footer getCompletedCount={getCompletedCount(props.todos)} />
      </div>
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    todos: store.rootReducer.todos,
    title: store.rootReducer.title,
    change: store.rootReducer.change,
    mode: store.rootReducer.mode,
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
export default connect(mapStateToProps, mapDispatchToProps)(App);
