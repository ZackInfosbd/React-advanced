import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/people">People</Link>
      </li>
    </ul>
  </nav>;
};

export default Navbar;

/* * to navigate your links in React, avoid using the classical way like 
  we used to do before with html but instead we import the link from our 
  react-router-dom and add also the to="" prop to it*/
