import React from 'react';
import './index.less';
import { Card,Button,Radio } from 'antd';

export default class Buttons extends React.Component{
    state = {
        loading   : true,
        buttonSize: 'small'
    }
    noLoading = ()=>{
        this.setState({
            loading: false
        })
    }
    YeLoading = ()=>{
        this.setState({
            loading: true
        })
    }
    onChangeButtonSize=(e)=>{
        this.setState({
            buttonSize: e.target.value
        })
    }
    render(){
        return (
            <div>
                <Card title="基础按钮" className="card-wrap">
                    <Button type="primary">主按钮</Button>
                    <Button >普通主按钮</Button>
                    <Button type="dashed">虚线按钮</Button>
                    <Button type="danger">警告按钮</Button>
                    <Button disabled>警用按钮</Button>
                </Card>
                <Card title="图形按钮" className="card-wrap">
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card title="Loading按钮" className="card-wrap">
                    <Button type="primary" loading={this.state.loading}>确定</Button>
                    <Button type="primary" loading={this.state.loading} shape="circle"></Button>
                    <Button loading={this.state.loading} onClick={this.YeLoading}>点击加载</Button>
                    <Button loading={this.state.loading} shape="circle"></Button>
                    <Button type="primary" onClick={this.noLoading}>关闭</Button>
                </Card>
                <Card title="按钮组" className="card-wrap">
                    <Button.Group>
                        <Button type="primary" icon="left">返回</Button>
                        <Button type="primary" icon="right">前进</Button>
                    </Button.Group>
                </Card>
                <Card title="按钮尺寸" className="card-wrap">
                    <Radio.Group value={this.state.buttonSize} onChange={this.onChangeButtonSize}>
                        <Radio value="small">小</Radio>
                        <Radio value="default">中</Radio>
                        <Radio value="large">大</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.buttonSize}>主按钮</Button>
                    <Button size={this.state.buttonSize}>普通主按钮</Button>
                    <Button type="dashed" size={this.state.buttonSize}>虚线按钮</Button>
                    <Button type="danger" size={this.state.buttonSize}>警告按钮</Button>
                </Card>
            </div>
        )
    }
}