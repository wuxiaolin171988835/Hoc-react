import React from "react";
// 继承方式高阶组件
const modifyPropsHoc = (WrappedComponent) => class NewComponent extends WrappedComponent {
  //继承组件渲染都是NewComponent，难以区分，所以设置高阶组件显示名称以便于调试
  static displayName = `NewComponent(${getDisplayName(WrappedComponent)})`
  render() {
    const element = super.render();
    const newStyle = {
      color: element.type === 'div' ? 'red' : 'green'
    }
    const newProps = { ...this.props, style: newStyle }
    // console.log(element.props)
    return React.cloneElement(element, newProps, element.props.children)
    // return React.cloneElement(element, newProps, <p>react</p>)
  }
}
//获取组件的名称
function getDisplayName(WrappedComponent) {
  console.log(WrappedComponent)
  return WrappedComponent.displayName || WrappedComponent.name || 'Component'
}

export default modifyPropsHoc;
