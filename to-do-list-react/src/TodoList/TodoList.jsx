import React from "react";

const TodoList = () => {
  return (
    <div>
      <h2>Todos</h2>
      <ul>
        <li>
          <input type="checkbox" /> Learn React
        </li>
        <li>
          <input type="checkbox" /> Be Awesome!
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
