import React, { Component } from "react";
import Tabbar from "../components/Tabbar";
@Tabbar
class Category extends Component {
  render() {
    return (
      <div>
        <img
          src={require("../static/images/fenlei.jpeg")}
          className="bg"
          alt="分类"
        />
      </div>
    );
  }
}
export default Category;
