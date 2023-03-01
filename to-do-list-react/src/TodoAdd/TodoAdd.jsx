import React, { useRef } from "react";

const TodoAdd = () => {
  const inputRef = useRef();
  function clickHandler() {
    const inputElement = inputRef.current;
  }
  return (
    <div>
      <input ref={inputRef} type="text" />
      <br />
      <button onClick={clickHandler}>Add Todo</button>
    </div>
  );
};

export default TodoAdd;
