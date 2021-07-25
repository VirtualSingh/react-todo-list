import React, { Component } from "react";
import Todolist from "./components/Todolist";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import TodoInput from "./components/TodoInput";

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput />
          <Todolist />
        </div>
      </div>
    );
  }
}
