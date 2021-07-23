import React from 'react';
import MoviesTableRow from '../moviesTableRow/moviesTableRow';
import Loader from '../../components/loader/loader';
import './moviesTable.css';

class MoviesTable extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    render(){

        let data = this.props.data;

        let header = {
            sno: "S.No",
            name: "Movie Name",
            genre: "Genre",
            trailer: "Trailer",
            rating: "Rating"
        }

        let rows = [];

        for(let i of data) {
            rows.push(<MoviesTableRow key={i.sno} data={i} />);
        }

        return(
            <div className="movies-table">
                <MoviesTableRow data={header} header={true}/>
                {this.props.loader ? <Loader /> : ""}
                {rows}
            </div>
        )
    }
}

export default MoviesTable;