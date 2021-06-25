import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      // console.log("submit the form");
      const person = { id: new Date().getTime().toString(), firstName, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName("");
      setEmail("");
    } else {
      console.log("empty values");
    }
  };
  return (
    <>
      <article>
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name :</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit">add person</button>
        </form>
        {people.map((person) => {
          const { id, firstName, email } = person;
          return (
            <div key={id} className="item">
              <h4>{firstName} </h4>
              <p>{email}</p>
            </div>
          );
        })}
      </article>
    </>
  );
};

export default ControlledInputs;

/*  form Basics:
  * there are two ways to setup the submitHandler in the form, wether through
      1 - on the level of the <form onSubmit={handlerSubmit}></form>
      2 - on the level of the button with onClick={handlerSubmit}
      3 - the handler submit in both scenarios has to have event parameter:
      (e) to get the access of each property or method of this object
*/
/*
  * in React we can submit the form in two ways:
    - to access the data in the inputs there actually 03 ways clear for me now:

      // 1 - controlled inputs - value, onChange - (e.target.value)
          - value: which are hold by the input to be controlled.
          - onChange: method that will controle the values and each time we type
          something in the form will fire that function and within that function
          we will set up the state value and that in return u ll see it in the 
          form as well.
          // connect the inputs to state values: 
          value = {stateValue}
         // set the onChange 
         onchange = {(e)=> setValue(e.target.value)


      // 2 -  uncontrolled - multiple inputs:
      * we can have multiple inputs with the same onChange handler, in case
      we have many many inputs and the whole idea is to show how we would 
      deal with 10 inputs for example and do not want have 10 different functions
      that we call inside of the handler 


      // 3 - useRef Hook
       * Remember when we talk about forms that we have controlled inputs, 
      but we also have the option of using uncontrolled inputs and we do 
      that using the  useRef. 
        * so even though there are multiple things that we can do with useRef, most 
        popular, one is targeting the DOM element and essentially in turn that 
        allows us to set up uncontrolled inputs similar to how we would have it in 
        JavaScript.
      * the most used usecase is targetig DOM nodes/elements.
*/

/* 
  when you have some problems with the warning: Each child in a list should 
  have a unique "key" prop you can use some dedicated helper packages like
  youyouID 
*/
