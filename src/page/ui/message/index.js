import React from 'react';
import './index.less';
import { Card,Button,message } from 'antd';

export default class Message extends React.Component{
    state = {
    }
    openMessage = (type)=>{
        message[type](type)
    }
    render(){
        return (
            <div>
                <Card title="全局提示框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openMessage('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.openMessage('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.openMessage('error')}>error</Button>
                    <Button type="primary" onClick={()=>this.openMessage('warning')}>warning</Button>
                    <Button type="primary" onClick={()=>this.openMessage('loading')}>loading</Button>
                </Card>
            </div>
        )
    }
}