import React from "react";
import { useRef, useEffect, useState } from "react";
function FocusInput() {
  const [count, setCount] = useState(0);
  const inputRef = useRef();
  const intervalRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    intervalRef.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);
    return () => {
      clearInterval(intervalRef.current);
    };
  }, [count]);

  return (
    <div className="focus-input">
      <h3>
        FocusImput using <span>useRef Hook</span> hood
      </h3>
      <h1>{count}</h1>
      <button onClick={() => clearInterval(intervalRef.current)}>
        clear count
      </button>
      <form action="">
        <input ref={inputRef} type="text" />
      </form>
    </div>
  );
}

export default FocusInput;
