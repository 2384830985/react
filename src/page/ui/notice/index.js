import React from 'react';
import './index.less';
import { Card,Button,notification } from 'antd';

export default class NoTice extends React.Component{
    state = {
    }
    openNotice = (type,placement)=>{
        const arr = {
            message    : '你吃早饭了吗',
            description: '你吃个啥了呢'
        }
        if(placement){
            notification.config({
                placement: placement
            })
        }
        notification[type](arr)
    }
    render(){
        return (
            <div>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotice('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.openNotice('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.openNotice('error')}>error</Button>
                    <Button type="primary" onClick={()=>this.openNotice('warning')}>warning</Button>
                </Card>
                <Card title="通知提醒框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.openNotice('success','topLeft')}>上左</Button>
                    <Button type="primary" onClick={()=>this.openNotice('info','topRight')}>上右</Button>
                    <Button type="primary" onClick={()=>this.openNotice('error','bottomLeft')}>下左</Button>
                    <Button type="primary" onClick={()=>this.openNotice('warning','bottomRight')}>下右</Button>
                </Card>
            </div>
        )
    }
}