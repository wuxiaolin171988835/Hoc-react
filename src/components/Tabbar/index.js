import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.less";
const tabbarArr = [
  {
    img: "icon-home",
    text: "首页",
    link: "/home"
  },
  {
    img: "icon-fenlei",
    text: "分类",
    link: "/category"
  },
  {
    img: "icon-shoutibao",
    text: "拼购",
    link: "/pingou"
  },
  {
    img: "icon-gouwuche",
    text: "购物车",
    link: "/car"
  },
  {
    img: "icon-yonghu",
    text: "我的",
    link: "/user"
  }
];
const Tabbar = WrappedComponent =>
  class Tabbar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        activeIndex: 0
      };
    }
    componentDidMount() {
      // 底部tabbar选中
      // let address = this.props.location.pathname;
      // let activeIndex = tabbarArr.findIndex(item => {
      //   return item.link === address;
      // });
      // this.setState({
      //   activeIndex: activeIndex
      // });
    }
    render() {
      const url = window.location.href;
      return (
        <div className="container">
          <div className="content">
            <WrappedComponent />
          </div>
          <div className="tabbar">
            <div className="tabbar-content">
              {tabbarArr.map((item, index) => {
                return (
                  <Link
                    to={item.link}
                    className={
                      "tabbar-item" +
                      (url.indexOf(item.link) > 0 ? " active" : "")
                    }
                    key={index}
                  >
                    <div className={"iconfont " + item.img} />
                    <div>{item.text}</div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  };

export default Tabbar;
