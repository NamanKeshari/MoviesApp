import React from 'react';
import './sideBarButtons.css';

class SideBarButtons extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <button className="sidebar-button" id={this.props.genre === this.props.text ? "selected" : ""} onClick={()=> {
                let value = this.props.text;
                this.props.changeGenre(value);
            }}>{this.props.text}</button>
        )
    }
}

export default SideBarButtons;