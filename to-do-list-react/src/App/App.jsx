import React, { useState, useRef } from "react";
import TodoAdd from "../TodoAdd/TodoAdd.jsx";
import "./App.css";
import TodoList from "../TodoList/TodoList.jsx";

const App = () => {
  //Todolist state
  const initialTodos = [];
  const [todos, setTodos] = useState(initialTodos);

  //TodoAdd Click Handler
  const inputRef = useRef();
  function clickHandler() {
    const inputElement = inputRef.current;
    const newTodos = [...todos];
    newTodos.push(inputElement.value);
    setTodos(newTodos);
    console.log("test");
    inputElement.value = "";
  }

  return (
    <div>
      <header>
        <h1>My Todo App</h1>
      </header>
      <TodoAdd clickHandler={clickHandler} inputRef={inputRef} />
      <hr />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
