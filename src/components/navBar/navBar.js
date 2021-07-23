import React from 'react';
import NavBarButtons from '../navBarButtons/navBarButtons';
import "./navBar.css";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="nav-bar" >
                <img className="logo" src="https://img.icons8.com/glyph-neue/64/000000/movie-projector.png" alt="logo"/>
                <NavBarButtons text="Home" />
                <NavBarButtons text="Movies" />
                <NavBarButtons text="About" />
            </div>
        )
    }
}

export default NavBar;