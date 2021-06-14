import React, { useState, useEffect } from "react";

// useEffect Basics
// second argument
// cleanup function
/*  useEffect: 
  //  fetch data + empty dependency list
  //  Multiple Returns Basic + conditional rendering*/

//  Multiple Returns Basic + conditional rendering*/
// const url = "https://api.github.com/users";

// const UseEffectSimpleMultipleReturn = () => {
//   const [loading, setLoading] = useState(true);
//   if (loading) {
//     return <h2>Loading...</h2>;
//   } else {
//     return <h2>multiple Returns</h2>;
//   }
// };

// export default UseEffectSimpleMultipleReturn;

/*
 * in Javacript we know that everything after the return statement will be 
ignored
        // so how we can have multiple returns?!!! ##
        *   well returns based on conditional statements

 */

// multiple Return - example - fetch data

const url = "https://api.github.com/users/QuincyLarson";

const UseEffectSimpleMultipleReturn = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    //   doesnt trigger the Error
    // fetch(url)
    //   .then((resp) => resp.json())
    //   .then((user) => {
    //     const { login } = user;
    //     setUser(login);
    //     setIsLoading(false);
    //   })

    // solution
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (isLoading) {
    return (
      <div>
        <h2>Loading...</h2>;
      </div>
    );
  }
  if (isError) {
    return (
      <div>
        <h2>Error...</h2>;
      </div>
    );
  }
  return (
    <div>
      <h1>{user}</h1>
    </div>
  );
};

export default UseEffectSimpleMultipleReturn;

/*
 * we could chain .then with fetch because fetch returns a promise, as long 
as it is a promise so we can acces to the the state values by chaining .then

* fetch doesnt not trigger my 404 ERROR
* AXIOS has better setup because it deals with those kinds of ERRORS
 */
