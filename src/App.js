import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Home.js";
import { About } from "./About.js";
import { Contact } from "./Contact.js";
import { NoMatch } from "./NoMatch.js";
import { NavigationBar } from "./NavigationBar";

function App() {
  return (
    <>
      <NavigationBar></NavigationBar>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route component={NoMatch}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
