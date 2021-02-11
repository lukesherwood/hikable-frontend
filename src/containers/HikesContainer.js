import React from "react";
import { fetchHikes } from "../actions/hikeActions";
import { connect } from "react-redux";
import Hikes from "../components/Hikes";

class HikesContainer extends React.Component {
  componentDidMount() {
    this.props.fetchHikes();
  }

  render() {
    return (
      <div className="hikes-container">
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
