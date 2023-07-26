//let's display the count of how many time our component re-renders
import React from "react";
import { useState, useEffect, useRef } from "react";

function InputChange() {
  const [name, setName] = useState(""); //for the input
  const renderCounter = useRef(1); //to see how many times theh ocmponent rendered
  const focusRef = useRef(null);
  const prevName = useRef(null); //to keep the previous name

  useEffect(() => {
    renderCounter.current += 1;
    console.log(renderCounter.current);
    prevName.current = name;
  }, [name]);

  //when the button below is clicked, but the focus on the input and change the value
  function focusFunc() {
    focusRef.current.focus();
    // focusRef.current.value = "changed input value";
  }

  return (
    <div className=" input-focus">
      <h1>InputChange</h1>
      <input
        type="text"
        name=""
        id=""
        ref={focusRef}
        onChange={(e) => setName(e.target.value)}
      />
      <h3>
        My current name is: <span> {name}</span> and it used to be
        <span> {prevName.current}</span>
      </h3>
      <h3>i rendered: {renderCounter.current}</h3>
      <button onClick={focusFunc}>Focus</button>
    </div>
  );
}

export default InputChange;
