import React from 'react';
import "./navBarButtons.css";

class NavBarButtons extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return (
            <button className="nav-bar-button">{this.props.text}</button>
        )
    }
}

export default NavBarButtons;