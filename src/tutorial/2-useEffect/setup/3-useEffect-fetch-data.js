import React, { useState, useEffect } from "react";

// useEffect Basics
// second argument
// cleanup function

// useEffect: fetch data + empty dependency list

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users); // read the explaination below!!!
    console.log(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>Github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;

/*
  * we have multiple to how implement fetch in useEffect:
    //  either in the useEffect body or in seperate function, but
    remember that to fetch data we use async/await, and async returns a promise
    so making the callback function of the useEffect async is gonna be an issue
    because useEffect can only return a function, which is cleanup function.
    
    // important!!!!
    * so we can use the async/await inside the callback function or seperated.
    * then we could use the built-in fetch method or some external libraries 
    as well like AXIOS.
    * without the empty dependency list(initial render) or the cleanup 
    function that will lead to infinit loop - crashes the browser so:
            // so if you are triggering the re-render using useState(setValue),
            in the useEffect make sure you are using the empty list of 
            dependencies, so that way you either run it once the component 
            renders or certain values change. 
            ## so just be careful how do you set this up
*/
