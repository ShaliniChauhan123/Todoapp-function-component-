import "../src/styles.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
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

const Todo = (props) => {
  const getCompletedCount = (todos) =>
    todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0);

  return (
    <div>
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
              <div key={todoDetail.id}>
                <TodoItem
                  todos={todoDetail}
                  handleCheckboxChange={props.handleCheckboxChange}
                  handleTodoEdit1={props.handleTodoEdit1}
                  handleTodoDelete={props.handleTodoDelete}
                />
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
                <div key={todoDetail.id}>
                  <TodoItem
                    todos={todoDetail}
                    completed={todoDetail.completed}
                  />
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
  handleTodoEdit1: (val, val1) => {
    dispatch(handleTodoEdit1(val, val1));
  },
  clearCompleted: () => {
    dispatch(clearCompleted());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Todo);
