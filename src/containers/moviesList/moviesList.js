import React from 'react';
import './moviesList.css';
import SideBar from '../../components/sideBar/sideBar';
import NavBar from '../../components/navBar/navBar';
import MoviesTable from '../../components/moviesTable/moviesTable';
import Pagination from '../../components/pagination/pagination';
import { HandleGetMovies } from './dataManager';

class MoviesList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            pageNo: 1,
            flag: false,
            "rating": "all",
            "genre": "All Genre",
            data: [],
            loader: true
        };
    }

    async componentDidMount() {
        let data = await HandleGetMovies();
        this.setState({
            data: data,
            loader: false
        })
    }

    changeSearch = (e) => {
        this.setState({
            pageNo: 1,
            search: e.target.value,
            flag: true
        })
    }

    changeRating = (e) => {
        this.setState({
            pageNo: 1,
            flag: true,
            "rating": e.target.value === "all" ? "all" : parseInt(e.target.value)
        })
    }

    changeGenre = (e) => {
        this.setState({
            pageNo: 1,
            flag: true,
            "genre": e.target.value
        })
    }

    changeGenreS = (genre) => {
        this.setState({
            pageNo: 1,
            flag: true,
            "genre": genre
        })
    }

    changePage = (pageNo) => {
        this.setState({
            pageNo: pageNo
        })
    }

    render() {

        let data = this.state.data;

        data = data.filter((d) => {
            return d.name.toLowerCase().includes(this.state.search.toLowerCase());
        });

        data = data.filter((movie) => {
            if (this.state.rating !== "all") {
                return parseInt(movie.rating) === this.state.rating;
            }

            return true;
        });

        data = data.filter((movie) => {
            if (this.state.genre !== "All Genre") {
                return movie.genre === this.state.genre;
            }

            return true;
        });

        if (this.state.flag) {
            let i = 1;
            data = data.map((movie) => {
                movie.sno = i++;
                return movie;
            });
        }

        let finalData = [];

        for (let i = (this.state.pageNo - 1) * 5; i < this.state.pageNo * 5 && i < data.length; i++) {
            finalData.push(data[i]);
        }

        return (
            <div className="main-container">
                <NavBar />
                <SideBar genre={this.state.genre} changeGenre={this.changeGenreS}/>
                <div className="movie-table-container">
                    <div className="filters">
                        <input value={this.state.search} placeholder="Search for movies" className="movie-search" type={Text} onChange={this.changeSearch}></input>
                        <select className="rating-dropdown" name="rating" onChange={this.changeRating}>
                            <option value={"all"} selected>All Rating</option>
                            <option value={0}>0 Rating</option>
                            <option value={1}>1 Rating</option>
                            <option value={2}>2 Rating</option>
                            <option value={3}>3 Rating</option>
                            <option value={4}>4 Rating</option>
                            <option value={5}>5 Rating</option>
                        </select>

                        <select className="genre-dropdown" name="genre" onChange={this.changeGenre}>
                            <option value={"All Genre"} selected>All Genre</option>
                            <option value={"Drama"}>Drama</option>
                            <option value={"Crime"}>Crime</option>
                            <option value={"Action"}>Action</option>
                            <option value={"Mystery"}>Mystery</option>
                            <option value={"Sci-Fi"}>Sci-Fi</option>
                            <option value={"Fantasy"}>Fantasy</option>
                            <option value={"Comedy"}>Comedy</option>
                            <option value={"Animation"}>Animation</option>
                            <option value={"Romance"}>Romance</option>
                            <option value={"Horror"}>Horror</option>
                        </select>

                    </div>
                    <MoviesTable data={finalData} loader={this.state.loader} />
                    <Pagination totalMovies={data.length} pageNo={this.state.pageNo} changePage={this.changePage} />
                </div>
            </div>
        )
    }
}

export default MoviesList;