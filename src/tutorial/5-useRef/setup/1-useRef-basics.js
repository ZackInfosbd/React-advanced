import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);
  const handlerSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
    refContainer.current.value = "";
    console.log(divContainer.current);
  };
  console.log(refContainer);

  //useRef does not triger the re-render, we can setup useEffect without dependency list
  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  return (
    <>
      <form className="form" onSubmit={handlerSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">submit</button>
        </div>
      </form>
      <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;

/*
  * Remember when we talk about forms that we have controlled inputs, but we 
also have the option of using uncontrolled inputs and we do that using the 
useRef. 
* so even though there are multiple things that we can do with useRef, most 
popular, one is targeting the DOM element and essentially in turn that 
allows us to set up uncontrolled inputs similar to how we would have it in 
JavaScript.

* the most used usecase is targetig DOM nodes/elements
*/
