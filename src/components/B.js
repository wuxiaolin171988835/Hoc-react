import React, { Component } from "react";
import A from "./A";
import D from "./D";
class B extends Component {
  render() {
    return <div className="b-container">B组件</div>;
  }
}

export default D(B);
