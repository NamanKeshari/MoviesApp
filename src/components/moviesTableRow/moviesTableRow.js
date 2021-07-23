import React from 'react';
import './moviesTableRow.css';
import Rating from '@material-ui/lab/Rating';

class MoviesTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let { sno, name, genre, trailer, rating } = this.props.data;
        return (
            <div className="movies-table-row" style={this.props.header ? { fontWeight: "bold", backgroundColor: '#260303', color: '#D94188' } : {}}>
                <div className="column serial-number">{sno + "."}</div>
                <div className="column movie-name">{name}</div>
                <div className="column genre">{genre}</div>
                <div className="column trailer">
                    {this.props.header ? trailer : <a href={trailer}>
                        <img className="trailer-image" src="/trailer2.gif" alt="trailer" />
                    </a>}
                </div>
                <div className="column rating">
                    {this.props.header ? rating : <Rating name="read-only" value={rating} readOnly />}
                </div>
            </div>
        )
    }
}

export default MoviesTableRow;