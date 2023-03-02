import React from "react";

const TodoAdd = ({ clickHandler, inputRef, handleClearList }) => {
  return (
    <div>
      <input ref={inputRef} type="text" />
      <br />
      <button onClick={clickHandler}>Add Todo</button>
      <br />
      <br />
      <button onClick={handleClearList}>Clear</button>
    </div>
  );
};

export default TodoAdd;
