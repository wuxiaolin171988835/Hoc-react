import React, { Component } from "react";
import A from "./A";
// import D from "./D";

@A
class B extends Component {
  render() {
    return (
      <div className="b-container">
        <input type="text" {...this.props} />
        <br />
        我的名字：{this.props.name}
        <br />
        我的年龄：{this.props.age}
        <br />
        我的性别：{this.props.sex}
        <br />
        B组件
      </div>
    );
  }
}

export default B;
