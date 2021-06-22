import React, { useState, useContext } from "react";
import { data } from "../../../data";
// more components
// fix - context api, redux (for more complex cases)

// 1- our context name
const PersonContext = React.createContext();
// two components - Provider, Consumer

const ContextAPI = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    setPeople((people) => {
      return people.filter((person) => person.id !== id);
    });
  };
  return (
    // <PersonContext.Provider value="hello">
    <PersonContext.Provider value={{ removePerson, people }}>
      <h3>context API</h3>
      <List />
    </PersonContext.Provider>
  );
};

const List = () => {
  // const { people } = useContext(PersonContext);
  // or
  const mainData = useContext(PersonContext);
  return (
    <>
      {mainData.people.map((person) => {
        return <SinglePerson key={person.id} {...person} />;
      })}
    </>
  );
};

const SinglePerson = ({ id, name }) => {
  const { removePerson } = useContext(PersonContext);

  return (
    <div className="item">
      <h4>{name}</h4>
      <button onClick={() => removePerson(id)}>remove</button>
    </div>
  );
};

export default ContextAPI;

/*
  * as we have said in the last video to solve the matter of props derilling
  and to avoid passing props all long down the component's tree,simply we 
  just use contextApi through useContext hook:
      1 - we come with a name of our context, which is under form of variable
      assigned with React.createContext().
      the moment we do that we have acess to two components:
      the provider and the consumer, but with the arrival of useContext, we
      wont use the consumer - PersonContext.Provider - Provider works as the
      distributor.
      2 - we have to look on that root component nd return that context 
      Provider, in our case will be PersonContext.Provider, and why is that 
      important because for the Provider we have the value prop that through 
      we can pass what we would want.
      3 - we destructure the passed object in our named context to access to
      the passed value on which level we want.

  * Mr John said that personally:
      - does not find it that useful if he has only one level we still can 
      pass props normally. 
      - also a lot of times he prefers to stick setting it up one time 
      Globally - we ll see that in projects, where essentially he will cover
      the whole APP in that context provider. and the way we do that we seperate
      the our named main context and then just wrappe it in the index.js; 
      after just import in the needed file.
*/
