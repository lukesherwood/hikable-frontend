import React, { Component } from "react";
import { addHikeToList, fetchLists, deleteHike } from "../actions/listActions";
import { connect } from "react-redux";
import Button from "react-bootstrap/Button";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
class UpdateListHikes extends Component {
  componentDidMount() {
    this.props.fetchLists();
  }
  handleDelete = () => {
    this.props.deleteHike(this.props.list, this.props.hike);
  };
  handleClick = (event, list) => {
    this.props.addHikeToList(list, this.props.hike);
  };

  render() {
    const { lists } = this.props.lists;
    const listItems = lists.map((item) => {
      return (
        <Dropdown.Item onClick={(e) => this.handleClick(e, item)}>
          {item.name}
        </Dropdown.Item>
      );
    });
    return (
      <div>
        <div>
          {this.props.signedIn  && !this.props.list ? // checked if signed in and not on a list page
         ( <DropdownButton
            id="dropdown-basic-button"
            title="Add to list"
            variant="outline-primary"
            size="sm"
            className="add-to-list-button"
          >
            {listItems}
          </DropdownButton>) : null
          }
        </div>
        <div>
          {this.props.list ? ( // if on a list page only want to see remove from list
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
    signedIn: state.users.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addHikeToList: (list, hikeId) => dispatch(addHikeToList(list, hikeId)), // how does it get these list ans hikeID?
    fetchLists: () => dispatch(fetchLists()),
    deleteHike: (list, hike) => dispatch(deleteHike(list, hike)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateListHikes);
