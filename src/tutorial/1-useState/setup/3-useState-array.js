import React from "react";
import { data } from "../../../data";

// use

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(people.filter((person) => person.id !== id));
    // OR
    // setPeople((oldPeople) => {
    //   let newPeople = oldPeople.filter((person) => person.id !== id);
    //   return newPeople;
    // });
    // OR
    setPeople((oldPeople) => {
      return oldPeople.filter((person) => person.id !== id);
    });
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button type="button" className="" onClick={() => removeItem(id)}>
              delete
            </button>
          </div>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        clear all iitems
      </button>
    </>
  );
};

export default UseStateArray;

// General Rules of the Hooks

// use
// component name must be uppercase
// must be the function/component body
// can not call onditionally
// const UseStateArray = () => {
//   const [text, setText] = useState("random title");
//   const handlerClick = () => {
//     /*
//       if(useState){} // can not call conditionally
//      */
//     if (text === "random title") {
//       setText("hello world");
//     } else if (text === "john") {
//       setText("hello zakaria");
//     }
//   };
//   return (
//     <React.Fragment>
//       <h1>useState array example</h1>
//       <h2>{text}</h2>
//       <button type="button" className="btn" onClick={handlerClick}>
//         change Title
//       </button>
//     </React.Fragment>
//   );
// };

// export default UseStateArray;

/*
 * use - Hooks start with use
 * components in what we invoke those Hooks name must be uppercase
 * the useState Hook must be the function/component body
 * can not call onditionally ## if(useHook){} ##
 */
