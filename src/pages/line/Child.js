import React from 'react';
import { Button,Input } from 'antd';

export default class Child extends React.Component{
    constructor(Props){
        super(Props)
        this.state = {
        }
    }
    // ---------------------------------------初始  
    // render 初始开始前
    componentWillMount(){
        console.log('Will Mount')
    }
    // render 初始开始后
    componentDidMount(){
        console.log('Did Mount')
    }
    // 接收父级参数
    componentWillReceiveProps(newProps){
        console.log('ReceiveProps'+newProps.name)
    }
    // ----------------------------------------改变
    // 当前模块改变执行
    shouldComponentUpdate(){
        console.log('should updata')
        return true
    }
    // render 改变开始前
    componentWillUpdate(){
        console.log('will updata')
    }
    // render 改变开始后
    componentDidUpdate(){
        console.log('Did updata')
    }

    render(){
        console.log('render')
        return <div>
            <p>{this.props.name}</p>
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>
            <Input placeholder="Basic usage" />
        </div>
    }

}