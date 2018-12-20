import React from 'react';
import './index.less';
import { Card,Button, Modal } from 'antd';

export default class Models extends React.Component{
    state = {
        showModel1: false,
        showModel2: false,
        showModel3: false,
        showModel4: false,
    }

    handleOpen = (type)=>{
        this.setState({
            [type]: true
        })   
    }

    handleConfirm = (type)=>{
        Modal[type]({
            title        : 'Are you sure delete this task?',
            content      : 'Some descriptions',
            okText       : 'Yes',
            okType       : 'danger',
            okButtonProps: {
            //   disabled: true,
            },
            cancelText: 'No',
            onOk() {
              console.log('OK');
            },
            onCancel() {
              console.log('Cancel');
            },
        })
    }
    render(){
        return (
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleOpen('showModel1')}>open</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModel2')}>自定义页面</Button>
                    <Button type="primary" onClick={()=>this.handleOpen('showModel3')}>顶部20px模态框</Button>
                </Card>
                <Card title="信息确认模态框" className="card-wrap">
                    <Button type="primary" onClick={()=>this.handleConfirm('confirm')}>confirm</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('success')}>success</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('error')}>error</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('info')}>info</Button>
                    <Button type="primary" onClick={()=>this.handleConfirm('warning')}>info</Button>
                </Card>
                <Modal
                    title    = "React"
                    visible  = {this.state.showModel1}
                    onCancel = {()=>{
                        this.setState({
                            showModel1: false
                        })
                    }}
                >
                    <p>少年，你吃早饭了吗</p>
                </Modal>
                <Modal
                    title      = "自定义"
                    visible    = {this.state.showModel2}
                    okText     = "好的"
                    cancelText = "算了"
                    onCancel   = {()=>{
                        this.setState({
                            showModel2: false
                        })
                    }}
                >
                    <p>我是自定义自定义</p>
                </Modal>
                <Modal
                    visible  = {this.state.showModel3}
                    style    = {{top:20}}
                    onCancel = {()=>{
                        this.setState({
                            showModel3: false
                        })
                    }}
                >
                    <p>顶部</p>
                </Modal>
            </div>
        )
    }
}