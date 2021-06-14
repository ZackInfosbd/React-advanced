import React, { useState, useEffect } from "react";

// cleanup function
// second argument

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
export default UseEffectCleanup;
