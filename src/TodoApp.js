import React from "react";
import Header from "./components/header-component/header-component.component";
import Body from "./components/body-component/body-component.components";
import VisibilityFilters from "./components/VisibilityFilters";
import "./styles.css";

export default function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <Header />
      <Body />
      <VisibilityFilters />
    </div>
  );
}
