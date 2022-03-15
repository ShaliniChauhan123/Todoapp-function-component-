import "../styles.css";
//import { BrowserRouter, Link } from "react-router-dom";
import React, { useState } from "react";
import { set1, set2, set3, clearCompleted } from "../actions/actions";
import { connect } from "react-redux";

const Footer = (props) => {
  return (
    <div>
      {props.todos.length !== 0 ? (
        <div className="footer">
          <div className="filters1">
            <div className="spacingforfooter">
              {props.mode === "Completed"
                ? props.getCompletedCount
                : props.todos.length - props.getCompletedCount}
            </div>

            <div>
              {(props.mode === "All" &&
                props.todos.length - props.getCompletedCount === 1) ||
              (props.mode === "Active" &&
                props.todos.length - props.getCompletedCount === 1) ? (
                <span> item l</span>
              ) : (
                <div>
                  {(props.mode === "All" &&
                    props.todos.length - props.getCompletedCount !== 1) ||
                  (props.mode === "Active" &&
                    props.todos.length - props.getCompletedCount !== 1) ? (
                    <span> items l</span>
                  ) : (
                    <div>
                      {props.mode === "Completed" &&
                      props.getCompletedCount === 1 ? (
                        <span> item l</span>
                      ) : (
                        <span> items l</span>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <span> eft</span>
          </div>
          <div className="filters2">
            <ul>
              <li onClick={props.set1}>
                <a className={props.mode === "All" ? "selected" : "bordernone"}>
                  All
                </a>{" "}
              </li>
              <li onClick={props.set2}>
                <a
                  className={
                    props.mode === "Active" ? "selected" : "bordernone"
                  }
                >
                  Active
                </a>
              </li>
              <li onClick={props.set3}>
                <a
                  className={
                    props.mode === "Completed" ? "selected" : "bordernone"
                  }
                >
                  Completed
                </a>
              </li>
            </ul>
          </div>

          <div
            className={
              props.getCompletedCount >= 1 ? "filters3" : "filtersnone"
            }
          >
            <ul>
              <li onClick={() => props.clearCompleted(props.todos)}>
                Clear completed
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};
const mapStateToProps = (store) => {
  return {
    todos: store.rootReducer.todos,
    mode: store.rootReducer.mode,
    change: store.rootReducer.change,
  };
};

const mapDispatchToProps = (dispatch) => ({
  set1: () => {
    dispatch(set1());
  },
  set2: () => {
    dispatch(set2());
  },
  set3: () => {
    dispatch(set3());
  },

  clearCompleted: () => {
    dispatch(clearCompleted());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Footer);
