import React, { Component } from "react";
import Tabbar from "../components/Tabbar";
@Tabbar
class Car extends Component {
  render() {
    return (
      <div>
        <img
          src={require("../static/images/car.jpeg")}
          className="bg"
          alt="购物车"
        />
      </div>
    );
  }
}
export default Car;
