import React from "react";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import AboutUs from "../pages/AboutUs";
import Home from "../pages/Home";

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/about" component={ AboutUs } />
      </Switch>
    );
  }
}

export default Content;