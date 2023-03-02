import React, { useState } from "react";

const TodoList = ({ todos }) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    console.log("Test");
    setChecked(!checked);
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input type="checkbox" onChange={handleChange} /> {todo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
