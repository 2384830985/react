import React from 'react';
import './index.less';
import MenuConfig from '../../config/menuConfig'
import { Menu, } from 'antd';
import {NavLink} from 'react-router-dom'
const SubMenu = Menu.SubMenu;
// const MenuItemGroup = Menu.ItemGroup;
export default class NavLft extends React.Component{
    constructor(Props){
        super()
        this.state = {
            MenuTreeNode: []
        }
    }
    // render 执行前
    componentWillMount(){
        const MenuTreeNode = this.renderMenu(MenuConfig)
        console.log(MenuTreeNode)
        this.setState({
            MenuTreeNode: MenuTreeNode
        }) 
    }
    // 菜单渲染
    renderMenu = (data)=>{
        return data.map((item) => {
            if(item.children){
                return (
                    <SubMenu key={item.key} title={item.title}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return (
                <Menu.Item key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            )
        })
    }

    handleClick = (e) => {
        console.log('click ', e);
    }
    render(){
        return (
            <div>
                <div className="logo">
                    <img src="/assets/logo-ant.svg" alt=""/>
                    <h1>Imooc MS</h1>
                </div>
                <Menu
                theme = "dark"
                // onClick         = {this.handleClick}
                // style           = {{ width: 256 }}
                // defaultOpenKeys = {['sub1']}
                // selectedKeys    = {[this.state.current]}
                // mode            = "inline"
                >
                {/* {MenuTreeNode.map((res,inbdex)=>{
                    <SubMenu key={res.key} title={<span><Icon type="mail" /><span>{res.title}</span></span>}>
                        <Menu.Item key="1">Option 1</Menu.Item>
                    </SubMenu>
                
                })} */}
               {this.state.MenuTreeNode}
               
                {/* <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigtion Two</span></span>}>
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                    <Menu.Item key="7">Option 7</Menu.Item>
                    <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu> */}
                </Menu>
            </div>
        )
    }
}