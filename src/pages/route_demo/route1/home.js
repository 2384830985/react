import React from 'react';
import { Route, Link, HashRouter, Switch } from 'react-router-dom';
import Home from './home1'
import About from './about'
import Topics from './topics'

export default class Main extends React.Component{
    render () {
        return (
            <HashRouter>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">about</Link>
                        </li>
                        <li>
                            <Link to="/topics">topics</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Switch>
                        <Route exact={true} path="/" component={Home}></Route>
                        <Route path="/about" component={About}></Route>
                        <Route path="/topics" component={Topics}></Route>
                    </Switch>
                </div>
            </HashRouter>
        )
    }
}