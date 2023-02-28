import React, { useState } from "react";
import TodoAdd from "../TodoAdd/TodoAdd.jsx";
import "./App.css";
import TodoList from "../TodoList/TodoList.jsx";

const App = () => {
  return (
    <div>
      <header>
        <h1>My Todo App</h1>
      </header>
      <TodoAdd />
      <hr />
      <TodoList />
    </div>
  );
};

export default App;
