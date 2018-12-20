import React from 'react';
import { Row, Col } from 'antd';
import Headers from './components/Headers';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';
import './style/common.less';
export default class Main extends React.Component{
    constructor(Props){
        super()
    }
    render(){
        return <div>
            <Row className="container">
                <Col span={3} className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span={21} className="main">
                    <Headers/>
                    <Row className="content">
                        {this.props.children}
                    </Row>
                    <Footer className="footer"/>
                </Col>
            </Row>
        </div>
    }
}