import React from 'react';
import {Card,Table} from 'antd'
import axios from '../../axios/index'
export default class Tables extends React.Component{

    constructor(Props){
        super(Props)
        this.state={
            dataSource     : [],
            dataSourceList : [],
            selectdeItem   : [],
            selectedRowKeys: [],
        }
    }


    componentDidMount(){
        this.setState({
            dataSource: [
                {
                    name   : 't',
                    age    : 15,
                    address: '河北',
                    key    : 1
                }
            ]
        })
        this.getList()
    }

    getList = ()=>{
        let that = this;
        axios.ajax({
            method: 'get',
            url   : '/table/list',
        }).then(res=>{
            if(res.code===0){
                res.data.list.map((item,index)=>{
                    item.key = index
                })
                that.setState({
                    dataSourceList: res.data.list
                })
            }
        })
    }

    onRowClick = (record,index)=>{
        let selectedRowKeys = [index]
        this.setState({
            selectdeItem   : record,
            selectedRowKeys: selectedRowKeys,
        })
    }
    onSelectChange = (selectedRowKeys) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
      }
    
    onSelect1 = (record,index)=>{
        let selectedRowKeys = this.state.selectedRowKeys
        // console.log(selectedRowKeys.push(index))
        // console.log(selectedRowKeys)
        console.log(record)
        console.log(index)
    }

    render(){
        const columns = [{
            title    : 'ID',
            dataIndex: 'id',
            key      : 'id',
        },{
            title    : '姓名',
            dataIndex: 'name',
            key      : 'name',
        }, {
            title    : '年龄',
            dataIndex: 'age',
            key      : 'age',
            render   : (age)=>{
                if(age>50){
                    return '太老了'
                }
                return age
            }
        }, {
            title    : '住址',
            dataIndex: 'address',
            key      : 'address',
        }];
        const rowSelection = {
            type           : 'checkbox',
            selectedRowKeys: this.state.selectedRowKeys,
            onChange       : this.onSelectChange,
        }
        const rowSelectionA = {
            type           : 'radio',
            selectedRowKeys: this.state.selectedRowKeys,
        }
        return (
            <div>
                <Card title="基础表格" className="card-wrap">
                    <Table
                        pagination = {false}
                        size       = "middle"
                        dataSource = {this.state.dataSource} columns = {columns} />
                </Card>
                <Card title="动态数据表格" className="card-wrap">
                    <Table
                        pagination = {false}
                        size       = "middle"
                        dataSource = {this.state.dataSourceList} columns = {columns} />
                </Card>
                <Card title="mock-多选" className="card-wrap">
                    <Table
                        pagination   = {false}
                        rowSelection = {rowSelection}
                        size         = "middle"
                        dataSource   = {this.state.dataSourceList} columns = {columns} />
                </Card>
                <Card title="mock-单选" className="card-wrap">
                    <Table
                        pagination   = {false}
                        rowSelection = {rowSelectionA}
                        onRow        = {(record,index)=>{
                            return {
                                onClick: ()=>{  
                                    this.onRowClick(record,index)
                                },
                                onSelect: ()=>{
                                    this.onSelect1(record,index)
                                },
                            }
                        }}
                        size       = "middle"
                        dataSource = {this.state.dataSourceList} columns = {columns} />
                </Card>
                <Card title="mock-分页" className="card-wrap">
                    <Table
                        pagination   = {true}
                        rowSelection = {rowSelectionA}
                        size         = "middle"
                        dataSource   = {this.state.dataSourceList} columns = {columns} />
                </Card>
            </div>
        );
    }
}