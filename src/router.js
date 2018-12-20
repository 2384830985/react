import React from 'react';
import {HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'
import Main from './main';
import Login from './page/login';
import Home from './page/home';
import Buttons from './page/ui/buttons';
import NoMatch from './page/nomatch';
import Models from './page/ui/models';
import Loadings from './page/ui/loadings';
import NoTice from './page/ui/notice';
import Message from './page/ui/message';
import Tabss from './page/ui/tabs';
import FormLogin from './page/form/login';
import FromRegister from './page/form/register';
import Tables from './page/table/basicTable';

export default class IRouter extends React.Component{
    render(){
        return (
            <Router>
                <App>
                    <Switch>
                        <Route path='/login' component={Login}></Route>
                        <Route path='/admin' render={()=>
                            <Main>
                                <Switch>
                                    <Route path='/admin/home' component={Home}></Route>
                                    <Route path='/admin/ui/buttons' component={Buttons}></Route>
                                    <Route path='/admin/ui/modals' component={Models}></Route>
                                    <Route path='/admin/ui/loadings' component={Loadings}></Route>
                                    <Route path='/admin/ui/notification' component={NoTice}></Route>
                                    <Route path='/admin/ui/messages' component={Message}></Route>
                                    <Route path='/admin/ui/tabs' component={Tabss}></Route>
                                    <Route path='/admin/form/login' component={FormLogin}></Route>
                                    <Route path='/admin/form/reg' component={FromRegister}></Route>
                                    <Route path='/admin/table/basic' component={Tables}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Main>
                        }></Route>
                        {/* <Route path='/order/detail' component={login}></Route> */}
                    </Switch>    
                </App>
            </Router>
        )
    }
}