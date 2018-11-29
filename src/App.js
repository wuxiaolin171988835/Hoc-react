import React, { Component } from "react";
import "./App.css";
// import B from "./components/B";
// import C from "./components/C";
// import E from "./components/E";
// import F from "./components/F"
import Tabbar from './components/Tabbar'
import RouterMap from './router'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 高阶组件test */}
        {/* <B name={"张三"} age={19} />
        <C />
        <E />
        <F /> */}
        {/* 高阶组件demo */}
        {/* <Tabbar /> */}
        <RouterMap />
      </div>
    );
  }
}

export default App;
