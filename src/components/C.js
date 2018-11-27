import React, { Component } from "react";
import A from "./A";
@A
class C extends Component {
  getName() {
    return "我是C组件";
  }
  render() {
    return (
      <div className="c-container">
        <input type="text" {...this.props} />
        <br />
        C组件
      </div>
    );
  }
}

export default C;
