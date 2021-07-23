import { Switch, Route } from "react-router-dom";
import { Component } from "react";
import MoviesList from "./containers/moviesList/moviesList";
import SideBar from "./components/sideBar/sideBar";
import NavBar from "./components/navBar/navBar";


class Navigator extends Component{
    render(){
        return(
            <Switch>
                <Route path="/" exact component={MoviesList}></Route>
                <Route path="/header" exact component={NavBar}></Route>
                <Route path="/sidebar" exact component={SideBar}></Route>
            </Switch>
        )
    }
}

export default Navigator;