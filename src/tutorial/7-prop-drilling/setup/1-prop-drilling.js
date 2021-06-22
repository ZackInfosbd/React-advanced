import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      <section>
        <h3>prop drilling</h3>
        <List people={people} removePerson={removePerson} />
      </section>
    </>
  );
};

const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person) => {
        return (
          <SinglePerson
            key={person.id}
            {...person}
            removePerson={removePerson}
          />
        );
      })}
    </>
  );
};

const SinglePerson = ({ id, name, removePerson }) => {
  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default PropDrilling;

/*
  *  prop drilling is not an official term. However, it is somewhat 
of the side effect when you have multiple components and then you have the
big component tree, and then you need to start passing some state from the top
component all the way to the bottom of your componentry.

* why we will cover prop drilling first is because in a next tutorial chapter 
in the useContext, we'll see how use context fixes that.
And more specifically, will we take a look at the context API that is
designed for that and then useContext hook is the new way how we can access
that context?
 */
