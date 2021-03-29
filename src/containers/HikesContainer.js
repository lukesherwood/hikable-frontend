import React from "react";
import { fetchHikes } from "../actions/hikeActions";
import { connect } from "react-redux";
import Hikes from "../components/Hikes";
import Pagination from "react-bootstrap/Pagination";
// import SearchBar from '../components/SearchBar'

class HikesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchHikes();
  }
  handleClick = (page) => {
      this.props.fetchHikes(page)
  }

  render() {
    const {pages} = this.props
    const {hikes} = this.props
    const {page} = this.props
    let active = page
    let items = [];
    for (let number = active; number <= (active + 4) && number < pages; number++) {
      items.push(
        <Pagination.Item onClick={() => this.handleClick(number)} key={"pageFilter"+ number + 1} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
    return (
      <div className="hikes-container">
        <Hikes hikes={hikes} />
        <div>
          <Pagination>
            <Pagination.First disabled={active - 1 === 0 ? true : false} onClick={() => this.handleClick(1)}/>
            <Pagination.Prev disabled={active -1 === 0 ? true : false} onClick={() => this.handleClick(active - 1)}/>
            {items}
            <Pagination.Ellipsis onClick={() => this.handleClick(active + 5)} />
            <Pagination.Item onClick={() => this.handleClick(pages)}>{pages}</Pagination.Item>
            <Pagination.Next disabled={active + 1 === pages ? true : false} onClick={() => this.handleClick(active + 1)}/>
            <Pagination.Last disabled={active + 1 === pages ? true : false} onClick={() => this.handleClick(pages)}/>
          </Pagination>
          <br />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    hikes: state.hikes.hikes,
    page: state.hikes.page,
    pages: state.hikes.pages,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHikes: (page) => dispatch(fetchHikes(page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HikesContainer);
