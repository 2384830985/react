import React from 'react';
import { HashRouter as Routers,Route } from 'react-router-dom'
import About from '../route1/about';
import Topice from '../route1/topics';
import Home from '../route1/home1';
import Xxxx from './xxxx';


export default class Main extends React.Component{
    render(){
        return (
            <Routers>
                <Xxxx>
                    <Route path="/main" render={()=>{
                        return (
                            <Home>
                                <Route path="/main/about" component={About}></Route>
                            </Home>
                        )
                    }}
                    ></Route>
                    <Route path="/about" component={About}></Route>
                    <Route path="/topics" component={Topice}></Route>
                </Xxxx>
            </Routers>
        )
    }
}