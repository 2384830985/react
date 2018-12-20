import React from 'react';
import './App.css';
import "antd/dist/antd.less";   // 引入官方提供的 less 样式入口文件

export default class App extends React.Component {
  constructor (props) {
    super()
  }
  // render 使用
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}
