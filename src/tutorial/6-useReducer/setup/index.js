import React, { useState, useReducer } from "react";
import Modal from "./Modal";
import { data } from "../../../data";
import { reducer } from "./reducer";

// using useState - simple state value
// ###################################

// const Index = () => {
//   const [name, setName] = useState("");
//   const [people, setPeople] = useState(data);
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name) {
//       setShowModal(true);
//       setPeople([...people, { id: new Date().getTime().toString(), name }]);
//       setName("");
//     } else {
//       setShowModal(true);
//     }
//   };

//   return (
//     <>
//       {showModal && <Modal />}
//       <form onSubmit={handleSubmit} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">add person</button>
//       </form>
//       {people.map((person) => {
//         return (
//           <div key={person.id}>
//             <h4>{person.name}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Index;

/*
  * notice here how we have no problems changing state values however we would 
  like. That's not usually a best use case.
  If you have a bigger app and if you work as a team, you would want to have 
  some kind of guardrails where you're only updating the state in a certain 
  way.So that way everyone is on the same page.
*/

// reducer function - refactoring
// ##############################

// basic useReducer

// const reducer = (state, action) => {};

// const defaultState = {
//   people: [],
//   isModalOpen: false,
//   modalContent: " ",
// };

// const Index = () => {
//   const [name, setName] = useState("");
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name) {
//     } else {
//     }
//   };
//   return (
//     <>
//       {state.isModalOpen && <Modal modalContent={state.modalContent} />}
//       <form onSubmit={handleSubmit} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">add</button>
//       </form>
//       {state.people.map((person) => {
//         return (
//           <div key={person.id}>
//             <h4>{person.name}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Index;

// Add Item
// ########

// const reducer = (state, action) => {
//   if (action.type === "ADD_ITEM") {
//     const newPeople = [...state.people, action.payload];
//     return {
//       ...state,
//       people: newPeople,
//       isModalOpen: true,
//       modalContent: "item add",
//     };
//   }
//   if (action.type === "NO_VALUE") {
//     return { ...state, isModalOpen: true, modalContent: "please enter value" };
//   }
//   // return state;
//   // OR
//   throw new Error("no matching action type ");
// };
// const defaultState = {
//   people: data,
//   isModalOpen: false,
//   modalContent: " ",
// };
// const Index = () => {
//   const [name, setName] = useState("");
//   const [state, dispatch] = useReducer(reducer, defaultState);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name) {
//       const newItem = { id: new Date().getTime().toString(), name };
//       dispatch({ type: "ADD_ITEM", payload: newItem });
//       setName("");
//     } else {
//       dispatch({ type: "NO_VALUE" });
//     }
//   };
//   return (
//     <>
//       {state.isModalOpen && <Modal modalContent={state.modalContent} />}
//       <form onSubmit={handleSubmit} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">add</button>
//       </form>
//       {state.people.map((person) => {
//         return (
//           <div key={person.id}>
//             <h4>{person.name}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

// export default Index;

// Remove Item
// ###########

const defaultState = {
  people: data,
  isModalOpen: false,
  modalContent: " ",
};
const Index = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && (
        <Modal closeModal={closeModal} modalContent={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">add</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Index;

/*
  * Now useReducer hook is used whenever we have a more complicated setup as 
  far as the state.

  *  if you have like a to do list or something like that, I think you're 
  using just regular useState that is good enough.

  * as your app gets more complicated, it definitely is a good practice to 
  useReducer because essentially it will add more structure to your state.
  So you won't be able to add just willy nilly how you'd want and change
  the state.It will have to go through certain steps and that is very,
  very useful when you work in a team.

  * useReducer rely heavily on Redux. 

  * The first thing we pass in is the reducers function and the difference 
  between the useState  and useReducer is at each and every time you want 
  to do something with that whole state, you always, always, must use dispatch
*/

/*
 * index.js is always the main entry point folder
 */
