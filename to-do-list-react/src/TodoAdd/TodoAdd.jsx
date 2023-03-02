import React from "react";

const TodoAdd = ({ clickHandler, inputRef }) => {
  return (
    <div>
      <input ref={inputRef} type="text" />
      <br />
      <button onClick={clickHandler}>Add Todo</button>
    </div>
  );
};

export default TodoAdd;
