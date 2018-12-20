import React from 'react';
import './index.less';
import {NavLink} from 'react-router-dom'
import { Card, Form, Input, Button,message, Icon, Checkbox } from 'antd';

class FormLogin extends React.Component{
    handlSubmit = ()=>{
        console.log(this.props.form.getFieldsValue())
        this.props.form.validateFields((err,values)=>{
            console.log(err)
            if(!err){
                console.log(values)
                message.success('你通过了')
            }else{
                message.error('你失败了')
            }
        })
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return (
            <div>
                <Card title="登陆行内表单" className="card-wrap">
                    <Form layout="inline">
                        <Form.Item>
                            <Input placeholder="请输入用户名"/>
                        </Form.Item>
                        <Form.Item>
                            <Input placeholder="请输入密码"/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">登陆</Button>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="登陆水平表单" className="card-wrap">
                    <Form style={{width: 300}}>
                        <Form.Item>
                            {
                                getFieldDecorator('userName',{
                                    initialValue: 'jack',
                                    rules       : [
                                        {
                                            required: true,
                                            message : '用户名不能为空'
                                        },
                                        {
                                            pattern: /^\w/g,
                                            message: '用户名必须为英文字母或者数字'
                                        }
                                    ],
                                })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('password',{
                                    initialValue: 'password',
                                    rules       : [
                                        {
                                            required: true,
                                            message : '密码不能为空'
                                        }
                                    ],
                                })(
                                    <Input prefix={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item>
                            {
                                getFieldDecorator('remember',{
                                    valuePropName: 'checked',
                                    initialValue : true,
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <NavLink to="/" style={{float: "right"}}>忘记密码</NavLink>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" onClick={this.handlSubmit}>登陆</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin)