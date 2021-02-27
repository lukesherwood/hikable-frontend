import React from "react";
import { fetchHikes } from "../actions/hikeActions";
import { connect } from "react-redux";
import Hikes from "../components/Hikes";
// import SearchBar from '../components/SearchBar'

class HikesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {
    return (
      <div className="hikes-container">
        {/* <SearchBar
        placeholder="Search"
       /> */}
        <Hikes hikes={this.props.hikes} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    hikes: state.hikes.hikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHikes: () => dispatch(fetchHikes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HikesContainer);
