import React from "react";
// react router
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// pages
import Home from "./Home";
import About from "./About";
import People from "./People";
import Error from "./Error";
import Person from "./Person";
// navbar
import Navbar from "./Navbar";
const ReactRouterSetup = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/people">
          <People />
        </Route>
        <Route path="/person/:id" children={<Person />}>
          <Person />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default ReactRouterSetup;

/*
  * to use the react routing, you need install the external package.
  -  npm install react-router-dom
  * later then wrape the whole APP in Router in app.js or index.js
  * to navigate to your exact page you need add eaxct prop to the Route of 
  the Home Page, or you can do it on lthe level of each nested route if there 
  will be some nested Routes
  * for no existing routes include star(*) in the path, but that also could 
  couses some probms with the routing.
  * add Switch component and let all the routes be included within the switch 
  component to solve all the missrouting
  * Navbar component should be outside of the Switch component.
  * URL Params & Placeholders are some sort of routing to but to pick a single
  item from the list shown in the parent of that item component - 
  peoples(list) - people(item), Products(list) - Product(item)
  {
    <Route path="/:id" children={<Person/>}> or <Route path="/person/:id" children={<Person/>}>
        <Person/>
      </Route>
  }
  */
