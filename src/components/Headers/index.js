import React from 'react';
import './index.less'
import { Row, Col } from 'antd';
import Util from '../../utils/utils';
import axios from './../../axios/index.js';
import {NavLink} from 'react-router-dom';
export default class Headers extends React.Component{
    constructor(Props){
        super()
        this.state = {
        }
    }

    componentWillMount(){
        let _this = this;
        _this.setState({
            userName: 'jinjinjin',
        })
        this.timer = setInterval(function(){
            let sysTime = Util.formateDate(new Date().getTime())
            _this.setState({
                sysTime: sysTime,
            })
        },1000)
        this.getWeatherAPIDate()
    }

    componentWillUnmount(){
        clearInterval(this.timer);
    }

    getWeatherAPIDate(){
        let _this = this;
        let city  = '北京'
        axios.jsonp({
            url: `http://api.map.baidu.com/telematics/v3/weather?location=${encodeURIComponent(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
        })
        .then(res=>{
            if(res.status==="success"){
                let data = res.results[0].weather_data[0];
                _this.setState({
                    weatherDetail: data.weather+data.temperature,
                    dayPictureUrl: data.dayPictureUrl,
                })
            }
            console.log(res)
        })
    }

    render(){
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎！，{this.state.userName}</span>
                        <NavLink to='/login'>退出</NavLink>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">首页</Col>
                    <Col span={20} className="weather">
                        <span className="date">{this.state.sysTime}</span>
                        <span className="weather-img">
                            <img src={this.state.dayPictureUrl} alt=""/>
                        </span>
                        <span className="weather-detail">
                            {this.state.weatherDetail}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}