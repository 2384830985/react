import React from 'react';
import './index.less';
import { Card,Tabs,message, Icon } from 'antd';
const TabPane = Tabs.TabPane;

export default class Tabss extends React.Component{
    state = {
        tabList: [
            {
                title  : 'tab1',
                content: '123',
                id     : 0,
                type   : 'plus'
            },
            {
                title  : 'tab2',
                content: '456',
                id     : 1,
                type   : 'edit'
            },
            {
                title  : 'tab3',
                content: '789',
                id     : 2,
                type   : 'delete'
            },
        ]
    }
    callback = (key)=>{
        message.info(key)
    }
    onChange = (ActiveKey)=>{
        this.setState({
            ActiveKey
        })
    }
    render(){
        return (
            <div>
                <Card title="tab页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab="Tab 1" key="1">123</TabPane>
                        <TabPane tab="Tab 2" key="2" disabled>456</TabPane>
                        <TabPane tab="Tab 3" key="3">789</TabPane>
                    </Tabs>
                </Card>
                <Card title="tab带图页签" className="card-wrap">
                    <Tabs defaultActiveKey="1" onChange={this.callback}>
                        <TabPane tab={<span><Icon type="plus"/>增加</span>} key="1">123</TabPane>
                        <TabPane tab={<span><Icon type="edit"/>修改</span>} key="2">456</TabPane>
                        <TabPane tab={<span><Icon type="delete"/>删除</span>} key="3">789</TabPane>
                    </Tabs>
                </Card>
                <Card title="tab带图页签循环" className="card-wrap">
                    <Tabs 
                            defaultActiveKey = "1"
                            type             = "editable-card"
                            onChange         = {this.onChange}>
                        {
                            this.state.tabList.map((res)=>{ 
                                return <TabPane tab={res.type} key={res.id}>{res.content}</TabPane>
                            })
                        }
                    </Tabs>
                </Card>
            </div>
        )
    }
}