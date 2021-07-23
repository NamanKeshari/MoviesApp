import React from 'react';
import './pagination.css';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class Pagination extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        let numberOFPages = Math.ceil(this.props.totalMovies / 5);
        let pages = [];
        for (let i = 0; i < numberOFPages; i++) {
            if(this.props.pageNo-1 === i){
                pages.push(<button className="pagination-button selected" onClick={() => {
                    this.props.changePage(i + 1)
                }}>{i + 1}</button>) 
            }else
            {
                pages.push(<button className="pagination-button" onClick={() => {
                this.props.changePage(i + 1)
                }}>{i + 1}</button>);
            }
        }
        return (
            <div className="pagination">
                <div className="arrows back" onClick={() => {
                    let pageNo = this.props.pageNo;
                    pageNo = pageNo - 1 > 0 ? pageNo - 1 : pageNo;
                    this.props.changePage(pageNo);
                }}>
                    <ArrowBackIosIcon />
                </div>
                {pages}
                <div className="arrows next" onClick={() => {
                    let pageNo = this.props.pageNo;
                    pageNo = pageNo + 1 <= numberOFPages ? pageNo + 1 : pageNo;
                    this.props.changePage(pageNo);
                }}>
                    <ArrowForwardIosIcon />
                </div>
            </div>
        )
    }
}

export default Pagination;