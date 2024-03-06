import React from "react";
import Signup from "../src/components/Signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
