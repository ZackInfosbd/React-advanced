import React, { useState } from "react";

// Simple Counter
// const UseStateCounter = () => {
//   let [value, setValue] = useState(0);

//   const reset = () => {
//     setValue(0);
//   };
//   return (
//     <>
//       <section
//         style={{
//           background: "#f7f5f7",
//           width: 500,
//           margin: "0 auto",
//           padding: "3rem",
//         }}
//       >
//         <h3>Regular Counter</h3>
//         <h1>{value}</h1>
//         <button type="button" className="btn" onClick={() => setValue(value--)}>
//           -
//         </button>
//         <button type="button" className="btn" onClick={reset}>
//           reset
//         </button>
//         <button type="button" className="btn" onClick={() => setValue(value++)}>
//           +
//         </button>
//       </section>
//     </>
//   );
// };

// more complex counter
const UseStateCounter = () => {
  let [value, setValue] = useState(0);

  const reset = () => {
    setValue(0);
  };
  const complexIncrease = () => {
    setTimeout(() => {
      // setValue(value + 1);
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 2000);
  };
  return (
    <>
      <section
        style={{
          background: "#f7f5f7",
          width: 500,
          margin: "3rem auto",
          padding: "3rem",
        }}
      >
        <h3>Regular Counter</h3>
        <h1>{value}</h1>

        <button type="button" className="btn" onClick={() => setValue(value--)}>
          Descrese
        </button>

        <button type="button" className="btn" onClick={reset}>
          Reset
        </button>

        <button type="button" className="btn" onClick={() => setValue(value++)}>
          Increase
        </button>
      </section>

      <section
        style={{
          background: "#f7f5f7",
          width: 500,
          margin: "0 auto",
          padding: "3rem",
        }}
      >
        <h3>complex Counter</h3>
        <h1>{value}</h1>
        <button type="button" className="btn" onClick={() => complexIncrease()}>
          increase later
        </button>
      </section>
    </>
  );
};

export default UseStateCounter;
