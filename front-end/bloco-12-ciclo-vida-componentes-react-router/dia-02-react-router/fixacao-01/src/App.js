import React from "react";
import { BrowserRouter } from "react-router-dom";
import Content from "./components/Content";

class App extends React.Component {

  constructor() {
    super();
    console.log('constructor');
  }

  shouldComponentUpdate() {
    console.log('should');
    return true;
  }

  componentDidMount() {
    console.log('didmount');
  }

  render() {
    console.log('render');
    return (
    <BrowserRouter>
      <Content />
    </BrowserRouter>
    );
  }
}

export default App;
