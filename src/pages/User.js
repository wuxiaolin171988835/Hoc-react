import React, { Component } from "react";
import Tabbar from "../components/Tabbar";
@Tabbar
class User extends Component {
  render() {
    return (
      <div>
        <img
          src={require("../static/images/user.jpeg")}
          className="bg"
          alt="用户"
        />
      </div>
    );
  }
}
export default User;
