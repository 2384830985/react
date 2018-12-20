import React from 'react';
import './index.less';
import { Card, Spin, Icon, Alert  } from 'antd';

export default class Loadings extends React.Component{
    state = {
       
    }

    render(){
        const icon = <Icon type="loading"/>
        return (
            <div>
                <Card title="Spin的用法" className="card-wrap">
                    <Spin className="mr-2"/>
                    <Spin className="mr-2" size="large"/>
                    <Spin className="mr-2" size="small"/>
                    <Spin className="mr-2" size="default"/>
                    <Spin className="mr-2" size="default" indicator={icon} spinning={true}/>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Spin spinning={true} tip="加载中...">
                        <Alert
                            message     = "React"
                            description = "你吃午饭了吗"
                            type        = "success"
                        ></Alert>
                    </Spin>
                </Card>
                <Card title="内容遮罩" className="card-wrap">
                    <Spin spinning={true} indicator={icon} tip="加载中...">
                        <Alert
                            message     = "React"
                            description = "你吃午饭了吗"
                            type        = "success"
                        ></Alert>
                    </Spin>
                </Card>
        
            </div>
        )
    }
}