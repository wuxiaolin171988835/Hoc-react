import React, { Component } from 'react'
import './index.less'
const tabbarArr = [
  {
    img: 'icon-home',
    text: '首页'
  },
  {
    img: 'icon-fenlei',
    text: '分类'
  },
  {
    img: 'icon-gouwuche',
    text: '购物车'
  },
  {
    img: 'icon-yonghu',
    text: '用户'
  },
]
class Tabbar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeIndex: 0,
    }
  }
  itemChange = (index) => {
    this.setState({
      activeIndex: index
    })
  }
  render() {
    return (
      <div className="tabbar">
        <div className="tabbar-content">
          {
            tabbarArr.map((item, index) => {
              return (
                <div className={'tabbar-item' + (this.state.activeIndex === index ? ' active' : '')} key={index} onClick={() => this.itemChange(index)}>
                  <div className={'iconfont ' + item.img}></div>
                  <div>{item.text}</div>
                </div>
              )
            })
          }
        </div>

      </div>
    )
  }
}
export default Tabbar
