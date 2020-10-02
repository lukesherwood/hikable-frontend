import React, { Component } from "react";
import { addHikeToList, fetchLists } from "../actions/listActions";
import { connect } from "react-redux";
import DropDownMenu from "./DropDownMenu"

class SaveHikeToList extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    };
  }
  handleClick = () => {
    this.props.fetchLists();
    this.setState({
      showMenu: true,
    });
  };

  render() {
     const {lists} = this.props.lists
    return (
      <div>
        <button
          onClick={this.handleClick}
          className="add-to-list-button"
        >
          Add to my list
        </button>
        {this.state.showMenu ? (
          <div className="menu">
            <DropDownMenu data={lists} hike={this.props.hike} addHikeToList={this.props.addHikeToList}/>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
    return {
        lists: state.lists
      }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addHikeToList: (list, hikeId) => dispatch(addHikeToList(list, hikeId)),
    fetchLists: () => dispatch(fetchLists()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SaveHikeToList);
