import React, { useState } from "react";

const TodoList = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    console.log("Test");
    setChecked(!checked);
  };

  return (
    <div>
      <h2>Todos</h2>
      <ul>
        <li>
          <input type="checkbox" onChange={handleChange} /> Learn React
        </li>
        <li>
          <input type="checkbox" onChange={handleChange} /> Be Awesome!
        </li>
      </ul>
    </div>
  );
};

export default TodoList;
