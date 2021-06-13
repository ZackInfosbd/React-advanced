import React, { useState } from "react";

// useState is a function
const UseStateBasics = () => {
  // console.log(useState);   // ---1
  // console.log(useState()); // ---2

  // const value = useState(1)[0];//--3
  // const handler = useState(1)[1];
  // console.log(value, handler);

  const [text, setText] = useState("random title");
  const handleClick = () => {
    if (text === "random titl") {
      setText("hello world");
    } else {
      setText("hello people");
    }
  };
  return (
    <React.Fragment>
      <h2>useState Basic Example</h2>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        Change Text
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;

/*
 * 1 - useState is a function - check it out ## console.log(useState); ##
 * 2 - useState returns an array with a value, and a function - that 
 controlls the value - ## console.log(useState()) ##
 * 3 - we can access to those values and assign them.
 * we can setup our useState,remember as long as our useState returns an 
 array so we can to destructure it.
 * */
