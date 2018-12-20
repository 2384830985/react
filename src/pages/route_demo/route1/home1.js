import React from 'react'
import { Link } from 'react-router-dom'
export default class Home extends React.Component{
    render (){
        return (
            <div>
                <div>Home</div>
                <div>
                    <Link to="/main/about">嵌套了呀</Link>
                </div>
                {this.props.children}
            </div>
        )
    }
}