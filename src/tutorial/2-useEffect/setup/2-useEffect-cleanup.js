import React, { useState, useEffect } from "react";

// useEffect Basics
// second argument
// cleanup function

// without clean up function
// const UseEffectCleanup = () => {
//   const [size, setSize] = useState(window.innerWidth);

//   const checkSize = () => {
//     setSize(window.innerWidth);
//   };
//   useEffect(() => {
//     console.log("hello world");
//     window.addEventListener("resize", checkSize);
//   });

//   return (
//     <>
//       <h1>window</h1>
//       <h2>{size} PX</h2>
//     </>
//   );
// };

/*
//  without cleanup function:
* in this example we did not use the cleanipfunction:
if you check element/ eventlistener you find a huge number of event listener 
on the window object done by our useEffect + useState - setSize, also a lot
of logs of hello world, and that's terrible and causes memory leak in big 
projects.

    // and why is that?
    because we did not use the cleaup function inside the useEffect Hook!
*/

// with cleanup function

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("resize", checkSize);
    return () => {
      console.log("cleanup");
      window.removeEventListener("resize", checkSize);
    };
  });

  console.log("render");

  return (
    <>
      <h1>window</h1>
      <h2>{size} PX</h2>
    </>
  );
};

/*
//  with cleanup function:
* in this example we did use the cleanipfunction:
if you check element/ eventlistener you find a limited number of event 
listener on the window object done by our useEffect + useState - setSize, 
also a lot of logs of "clean up", and that's protect the memory from leaking
in big projects.

    // well, you could say, we do not need the clean up function, and we can
    just use useEffect on initial render, well technically you are right.
    but the clean up function are very important when it comes to dealing
    with the component, appearing and disappearing - meaning - there will be 
    conditional rendering beacuse at the moment and in our last example
    the component is all the time on the screen, and does not allow us to see
    the real use of the cleanup function.

    Important!!!
    each time we set a useEffect is considred as good practice to incluse 
    the cleanup function.
    
*/
export default UseEffectCleanup;
