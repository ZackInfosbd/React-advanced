import React, { useState, useEffect } from "react";
/*
  * by default runs after every re-render: 
    // Basics. 
    // !Conditional.
    // Dependency list
    // we can use many useEffects in one component body
*/
// cleanup function
// second parameter

// useEffect Basics:

// const UseEffectBasics = () => {
//   let [value, setValue] = useState(0);
//   useEffect(() => {
//     console.log("call useEffect");
//     document.title = `New Messages(${value})`;
//   });
//   console.log("render the component");
//   return (
//     <>
//       <h2>useEffect Basics</h2>
//       <h1>{value}</h1>
//       <button className="btn" onClick={() => setValue(value++)}>
//         increase
//       </button>
//     </>
//   );
// };

/*
// useEffect - every work outside the component:
* useeffect is the second most used React Hook after useState, and it is used
to the side effect - every work outside of the component, that work could be:
changing doument title, signing up for subscribtion, fetching data,setting up
event listener... and stuff along those lines.
*/

// useEffect - Conditional
// const UseEffectBasics = () => {
//   let [value, setValue] = useState(0);
//   useEffect(() => {
//     console.log("call useEffect");
//     if (value > 5) {
//       document.title = `New Messages(${value} )`;
//     }
//   });
//   console.log("render the component");
//   return (
//     <>
//       <h2>useEffect Basics</h2>
//       <h1>{value}</h1>
//       <button className="btn" onClick={() => setValue(value++)}>
//         increase
//       </button>
//     </>
//   );
// };

/*
// useEffect - conditional

* the same rule as with useState - we can not call hooks inside the conditionals
means we can not use useEffect within conditionals 
*/

// Depenedency List: second parameter
const UseEffectBasics = () => {
  let [value, setValue] = useState(0);
  useEffect(() => {
    console.log("call first useEffect");
    if (value > 5) {
      document.title = `New Messages(${value} )`;
    }
    // }, []); // blank dependency parameter - runs only on initial render
  }, [value]);

  // we can use as many useEffects as we would want
  useEffect(() => {
    console.log("call second useEffect");
  }, []);

  console.log("render the component");
  return (
    <>
      <h2>useEffect Basics</h2>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value++)}>
        increase
      </button>
    </>
  );
};

export default UseEffectBasics;

// useEffect - Dependency List - second parameter

/* we pass our dependency list in form of an array after the comma at 
the end of the function.

  // [] - run only on the initial render:
* if the list of dependencies - array is left empty,that just means that it 
will run on the initial render.
*/
