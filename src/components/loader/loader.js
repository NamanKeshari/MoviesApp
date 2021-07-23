import React from 'react';
import './loader.css';

class Loader extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){
        return(
            <div className="loader-container">
                <img className="loader" src="/loader.gif" alt="loader"></img>
            </div>
        )
    }
}

export default Loader;