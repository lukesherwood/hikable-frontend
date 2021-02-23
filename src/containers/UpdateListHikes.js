import React, { Component } from "react";
import { addHikeToList, fetchLists, deleteHike } from "../actions/listActions";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
// import CreateListForm from "./CreateListForm";
class UpdateListHikes extends Component {

  handleDelete = () => {
    this.props.deleteHike(this.props.list, this.props.hike);
  };

  handleClick = (event, list) => {
    this.props.addHikeToList(list, this.props.hike);
  };
  
  renderCreateForm = () => {
    // return <CreateListForm/> not working, need to set up a modal
  };

  render() {
    const { lists } = this.props.lists; // need to pass in lists
    const listItems = lists.map((item) => {
      return (
        <Dropdown.Item onClick={(e) => this.handleClick(e, item)}>
          {item.name}
        </Dropdown.Item>
      );
    });
    listItems.push(
      <Dropdown.Item onClick={this.renderCreateForm}>
        Create a new list
      </Dropdown.Item>
    );
    return (
      <div>
        <div>
          {this.props.signedIn && !this.props.list ? (
            <DropdownButton
              id="dropdown-basic-button"
              title="Add to list"
              variant="primary"
              size="sm"
              className="add-to-list-button"
            >
              {listItems}
            </DropdownButton>
          ) : null}
        </div>
        <div>
          {this.props.list ? (
            <Button
              variant="outline-danger"
              size="sm"
              onClick={this.handleDelete}
              className="remove-from-list-button"
            >
              Delete
            </Button>
          ) : null}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lists: state.lists,
    signedIn: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHikeToList: (list, hikeId) => dispatch(addHikeToList(list, hikeId)),
    fetchLists: () => dispatch(fetchLists()),
    deleteHike: (list, hike) => dispatch(deleteHike(list, hike)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateListHikes);
