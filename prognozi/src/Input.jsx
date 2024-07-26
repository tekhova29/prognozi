import React, { useRef } from "react";

function Input({ search }) {
  const inputRef = useRef();
  function func1(e) {
    e.preventDefault();
    const inputValue = inputRef.current.value;
    console.log(inputValue);
    search(inputValue);
  }
  return (
    <div className="input-div">
      <form onSubmit={func1}>
        <input ref={inputRef} type="text" placeholder="Search Location..." />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Input;
