import React from 'react';
import {NavLink} from 'react-router-dom'
import './index.less';
import { Card, Form, Input, Button,message, Radio, InputNumber, Select, Switch,DatePicker, TimePicker,Upload,Icon,Checkbox} from 'antd';
import moment from 'moment'

const FormItem  = Form.Item;
class FromRegister extends React.Component{
    state = {
        loading: false,
      };

    handleSubmit = ()=>{
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
    getBase64=(img, callback)=> {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
      }
    beforeUpload =(file)=> {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
          message.error('You can only upload JPG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
          message.error('Image must smaller than 2MB!');
        }
        return isJPG && isLt2M;
      }
      handleBeforeUpload = (info) => {
        let _this = this
        if (info.file.status === 'uploading') {
          this.setState({ loading: true });
          return;
        }
        if (info.file.status === 'done') {
          // Get this url from response in real world.
          this.getBase64(info.file.originFileObj, imageUrl => _this.setState({
            imageUrl,
            loading: false,
          }));
        }
      }
    render(){
        const minRows = {
            minRows: 4
        }
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 4 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 12 },
            },
        };
        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span  : 24,
                    offset: 4,
                },
                sm: {
                    span  : 16,
                    offset: 4,
                },
            },
        };
        
        const { getFieldDecorator } = this.props.form;
        const uploadButton          = (
            <div>
              <Icon type={this.state.loading ? 'loading' : 'plus'} />
              <div className="ant-upload-text">Upload</div>
            </div>
          );
        return (
            <div>
                <Card title="注册表单" className="card-wrap">
                    <Form layout="horizontal">
                        <Form.Item
                            label = "用户名"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('userName',{
                                    initialValue: '',
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
                                    <Input placeholder="请输入用户名"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            label = "密码"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('password',{
                                    initialValue: '',
                                    rules       : [
                                        {
                                            required: true,
                                            message : '密码不能为空'
                                        },
                                    ],
                                })(
                                    <Input placeholder="请输入密码"/>
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            label = "性别"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('sex',{
                                    initialValue: '1',
                                    rules       : [
                                        {
                                            required: true,
                                            message : '性别不能为空'
                                        },
                                    ],
                                })(
                                    <Radio.Group>
                                        <Radio value="1">男</Radio>
                                        <Radio value="2">女</Radio>
                                    </Radio.Group>
                                )
                            }
                        </Form.Item>
                        <FormItem
                            label = "年龄"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('ages',{
                                    initialValue: '18',
                                    rules       : [
                                        {
                                            required: true,
                                            message : '年龄不能为空'
                                        },
                                    ],
                                })(
                                    <InputNumber></InputNumber>
                                )
                            }
                        </FormItem>
                        <Form.Item
                            label = "当前状态"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('state',{
                                    initialValue: '1',
                                })(
                                    <Select>
                                        <Select.Option value="1">单身</Select.Option>
                                        <Select.Option value="2">妻妾成群</Select.Option>
                                        <Select.Option value="3">老汉</Select.Option>
                                        <Select.Option value="4">前端狗</Select.Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            label = "爱好"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('interest',{
                                    initialValue: ['1','2','3','9'],
                                })(
                                    <Select mode="tags">
                                        <Select.Option value="1">游泳</Select.Option>
                                        <Select.Option value="2">跑步</Select.Option>
                                        <Select.Option value="3">开车</Select.Option>
                                        <Select.Option value="4">篮球</Select.Option>
                                        <Select.Option value="5">足球</Select.Option>
                                        <Select.Option value="6">桌球</Select.Option>
                                        <Select.Option value="7">麦霸</Select.Option>
                                        <Select.Option value="8">电脑游戏</Select.Option>
                                        <Select.Option value="9">dota</Select.Option>
                                    </Select>
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            label = "是否已结婚"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('isMarried',{
                                    valuePropName: 'checked',
                                    initialValue : true,
                                })(
                                    <Switch/>
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            label = "生日"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('birthday',{
                                    initialValue: moment('2018-12-07'),
                                })(
                                    <DatePicker
                                        showTime
                                        format = "YYYY-MM-DD HH:mm:ss"
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            label = "联系地址"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('address',{
                                    initialValue: '北京市',
                                })(
                                    <Input.TextArea
                                        autosize = {
                                            minRows
                                        }
                                    />
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            label = "早起时间"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('time')(
                                    <TimePicker/>
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            label = "头像"
                            {...formItemLayout}
                        >
                            {
                                getFieldDecorator('userImg')(
                                    <Upload
                                    name           = "avatar"
                                    listType       = "picture-card"
                                    className      = "avatar-uploader"
                                    showUploadList = {false}
                                    action         = "//jsonplaceholder.typicode.com/posts/"
                                    beforeUpload   = {this.beforeUpload}
                                    onChange       = {this.handleBeforeUpload}
                                  >
                                    {this.state.imageUrl ? <img src={this.state.imageUrl} alt="avatar" /> : uploadButton}
                                  </Upload>
                                )
                            }
                        </Form.Item>
                        <Form.Item
                            {...tailFormItemLayout}
                        >
                            {
                                getFieldDecorator('xieyi',{
                                    initialValue: true,
                                })(
                                    <Checkbox>我以及阅读过 <NavLink to='/'>xxx的协议</NavLink></Checkbox>
                                )
                            }
                        </Form.Item>
                        
                        <Form.Item
                             {...tailFormItemLayout}
                        >
                            <Button type="primary" onClick={this.handleSubmit}>注册</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FromRegister)