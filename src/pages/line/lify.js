import React from 'react';
import Child from './Child';
import './index.less'

export default class Lify extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount(){
        
    }

    xxxx(){
        this.setState({
            count: this.state.count + 1
        })
    }

    abc= _ =>{
        this.setState({
            count: this.state.count + 1
        })
    }
    render(){
        return <div className="content">
            <p>renact 生命周期</p>
            {/* 传递参数 */}
            <button onClick={()=>{this.xxxx()}}>点击一下</button>
            <button onClick={this.xxxx.bind(this)}>点击一下</button>
            <button onClick={this.abc}>点击一下</button>
            <p>{this.state.count}</p>
            <div>
                <Child name={this.state.count}></Child>
            </div>
        </div>
    }
}