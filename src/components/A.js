import React, { Component } from "react";
// 代理方式高阶组件
const A = WrappedComponent => {
  return class A extends Component {
    constructor(props) {
      super(props);
      this.state = {
        value: ""
      };
    }
    handleChange = e => {
      this.setState({
        value: e.target.value
      });
    };
    //高阶组件调用普通组件的方法
    refc(instance) {
      // instance.getName && alert(instance.getName());
    }
    render() {
      // 高阶组件更新普通组件的props(增加、删除、修改)
      const { age, ...otherProps } = this.props;
      const newProps = {
        value: this.state.value,
        onChange: this.handleChange
      };
      return (
        <div className="a-container">
          <div className="header">
            <div>提示</div>
            <div>×</div>
          </div>
          <div className="content">
            <WrappedComponent
              sex={"女"}
              {...otherProps}
              {...newProps}
              ref={this.refc.bind(this)}
            />
          </div>
        </div>
      );
    }
  };
};

export default A;
