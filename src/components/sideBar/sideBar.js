import React from 'react';
import SideBarButtons from '../sideBarButtons/sideBarButtons';
import './sideBar.css';

class SideBar extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="side-bar">
                <SideBarButtons text="All Genre" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Drama" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Crime" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Action" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Mystery" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Sci-Fi" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Fantasy" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Comedy" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Animation" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Romance" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
                <SideBarButtons text="Horror" genre={this.props.genre} changeGenre={this.props.changeGenre}/>
            </div>
        )
    }
}

export default SideBar;