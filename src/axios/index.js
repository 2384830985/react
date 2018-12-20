import JsonP from 'jsonp';
import Axio from 'axios';
import config from '../utils/config'
import { Modal } from 'antd';
export default class Axios{
    static jsonp(option){
        return new Promise((resolve,reject)=>{
            JsonP(option.url,{
                param: 'callback'
            },((err,response)=>{
                console.log(err)
                console.log(response)
                if(response.status==="success"){
                    resolve(response)
                }else{
                    reject(err)
                }
            }))            
        })
    }

    static ajax(option){
        return new Promise((resolve,reject)=>{
            Axio({
                url    : option.url,
                method : option.method||'get',
                baseURL: config.baseURL,
                timeout: 5000,
                params : (option.data && option.data.params)||'',
            }).then(res=>{
                if(res.status===200){
                    if(res.data.code===0){
                        resolve(res.data)
                    }else{
                        Modal.info({
                            title  : '错误提示',
                            content: res.data.msg
                        })
                    }
                }else{
                    reject(res.data)
                }
            })
        })
    }
}