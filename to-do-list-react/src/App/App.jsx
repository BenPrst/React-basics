import React, { useState, useRef, useEffect } from "react";
import TodoAdd from "../TodoAdd/TodoAdd.jsx";
import "./App.css";
import TodoList from "../TodoList/TodoList.jsx";

const LSKEY = "MyTodoApp";

const App = () => {
  //Todolist state
  const [todos, setTodos] = useState(() => {
    const storedTodos = window.localStorage.getItem(LSKEY + ".todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });

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

  const handleClearList = () => {
    setTodos([]);
  };

  useEffect(() => {
    window.localStorage.setItem(LSKEY + ".todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div>
      <header>
        <h1>My Todo App</h1>
      </header>
      <TodoAdd
        clickHandler={clickHandler}
        handleClearList={handleClearList}
        inputRef={inputRef}
      />
      <hr />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
