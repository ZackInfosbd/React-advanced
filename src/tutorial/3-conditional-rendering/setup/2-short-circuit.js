import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

// short-circuit evaluation
// const ShortCircuit = () => {
//   const [text, setText] = useState("");
//   const firstValue = text || "hello world";
//   const secondValue = text && "hello world";

//   return (
//     <>
//       {/* first */}
//       {/* {if(){console.log('hello world')}} */}
//       {/* second */}
//       {/* <h1>{firstValue}</h1>
//       <h1>value: {secondValue}</h1> */}
//       {/* third */}
//       <h1>{text || "john doe"}</h1>
//       {text && <h1>hello world</h1>}
//       {!text && <h1>hello world</h1>}
//     </>
//   );
// };

/*
* Remember!!!
    // the component body need to return a value expl-(JSX),and if we set up just
    if statement with some expression wont work because if does not return
    any thing implicitly,thats why we need to work with circuit short
*/

// ternary operator
const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h1>{text || "john doe"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {text && <h1>hello world</h1>}
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;

/*
  * the difference between logic operators (short-circuit operators) and 
ternary operator is that the ternary operator is more flexible than logical 
operator because it gives two possible values 

* on the level of the callback function we always set within useState(setValue)
 the oposit value of the state value */
