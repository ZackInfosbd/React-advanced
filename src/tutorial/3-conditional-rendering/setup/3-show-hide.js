import React, { useState, useEffect } from "react";

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size: {size}PX</h2>
    </div>
  );
};

export default ShowHide;

/*
  * we have said before that using blank dependency list will save us from
infinit loops cause by the event listened on the window object;
and we have said also that infinit loop will cause leaking in the memory

          // ## but here empty dependency list did not help us !!! why??##
          because now we are toggling the component
*/
