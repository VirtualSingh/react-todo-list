import React, { Component } from "react";
import TodoItem from "./TodoItem";

export default class Todolist extends Component {
  render() {
    return (
      <section>
        <TodoItem />
      </section>
    );
  }
}
