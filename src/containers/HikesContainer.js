import React from "react";
import { fetchHikes } from "../actions/hikeActions";
import { connect } from "react-redux";
import Hikes from "../components/Hikes";
import PaginationComponent from '../components/PaginationComponent'
// import SearchBar from '../components/SearchBar'

class HikesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {
    const {hikes} = this.props

    return (
      <div className="hikes-container">
        <Hikes hikes={hikes} />
        <PaginationComponent pages={this.props.pages} page={this.props.page} fetchData={this.props.fetchHikes}/>
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
