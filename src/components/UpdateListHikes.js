import React, { Component } from "react";
import { addHikeToList, fetchLists, deleteHike } from "../actions/listActions";
import { connect } from "react-redux";
import DropDownMenu from "./DropDownMenu"
import Button from 'react-bootstrap/Button';

class UpdateListHikes extends Component {
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
  handleDelete = () => {
    console.log(this.props.hike, "deleted from", this.props.list)
    this.props.deleteHike(this.props.list, this.props.hike)
  }

  render() {
     const {lists} = this.props.lists
    return (
      <div>
        <div>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={this.handleClick}
          className="add-to-list-button"
        >
          Add to my list
        </Button>
        </div>
        <div>
        <Button
          variant="outline-danger"
          size="sm"
          onClick={this.handleDelete}
          className="remove-from-list-button"
        >
          Delete
        </Button>
        </div>
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
    addHikeToList: (list, hikeId) => dispatch(addHikeToList(list, hikeId)), // how does it get these list ans hikeID?
    fetchLists: () => dispatch(fetchLists()),
    deleteHike: (list, hike) => dispatch(deleteHike(list, hike))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateListHikes);
