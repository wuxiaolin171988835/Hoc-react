import React, { Component } from "react";
import Tabbar from "../components/Tabbar";
@Tabbar
class Pingou extends Component {
  render() {
    return (
      <div>
        <img
          src={require("../static/images/pingou.jpeg")}
          className="bg"
          alt="拼购"
        />
      </div>
    );
  }
}

export default Pingou;
