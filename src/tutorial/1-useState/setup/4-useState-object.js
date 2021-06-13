import React, { useState } from "react";

// const UseStateObject = () => {
//   const [person, setPerson] = useState({
//     name: "peter",
//     age: 24,
//     message: "random message",
//   });

//   const changeMessage = () => {
//     setPerson({ ...person, message: "hello world" });
//   };
//   console.log(person);
//   return (
//     <>
//       <h3>{person.name}</h3>
//       <h3>{person.age}</h3>
//       <h3>{person.message}</h3>
//       <button className="btn" onClick={() => changeMessage()}>
//         change message
//       </button>
//     </>
//   );
// };

/*
  * do not forget to copy all the values from the object with spread 
  operator */

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "random message",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState("random message");

  const changeMessage = () => {
    setMessage("hello world");
  };
  console.log(person);
  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={() => changeMessage()}>
        change message
      </button>
    </>
  );
};

export default UseStateObject;

/* 
  // useState - multiple state values.
  * So essentially what I'm trying to say that there is no rule that prevents you from setting up as many
  state values as you would want.
  So instead of going for one giant object, you can set up multiple smaller state values where you have
  just a single value and a function that controls it.
  Or if you do decide, going with an object. 
  
  * And there's going to be some use cases where object might make a little bit more sense than always,
  always, always.
  Remember that you need to make sure that you preserve these old values.
  And a nifty way of doing that is using a separate operator where essentially we copy the properties
  from the previous object and then we just choose whichever we would want to override.*/
