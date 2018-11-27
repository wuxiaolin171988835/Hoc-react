import React, { Component } from "react";
import "./App.css";
import B from "./components/B";
import C from "./components/C";

class App extends Component {
  render() {
    return (
      <div className="App">
        <B name={"张三"} age={19} />
        <C />
      </div>
    );
  }
}

export default App;
