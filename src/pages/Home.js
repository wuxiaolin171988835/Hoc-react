import React, { Component } from "react";
import Tabbar from "../components/Tabbar";
@Tabbar
class Home extends Component {
  render() {
    return (
      <div>
        <img
          src={require("../static/images/home.jpeg")}
          className="bg"
          alt="首页"
        />
      </div>
    );
  }
}
export default Home;
