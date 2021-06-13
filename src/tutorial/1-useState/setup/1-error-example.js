import React from "react";

const ErrorExample = () => {
  let title = "random title";
  const handleClick = () => {
    title = "Hello people";
    console.log(title);
  };
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change title
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;

/*
 * useState and useEffect are the most used React Hooks.
 * useState can do more than we re going to see.
 * useState is important when our application get bigger and more 
 complicated.
 *  we use useState to re-render the component
 * the second thing, we have no way to preserve the values in between 
 the renders as we
 
    // then what we want?
    * we would want to keep the values between the renders.
    * trigger that re-render
    
    
    * thats why we use the useState
 * */
