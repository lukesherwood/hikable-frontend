import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { deleteHike } from '../actions/hikeActions';
import { addHikeToList, fetchLists } from '../actions/listActions';
import CreateListModal from '../components/CreateListModal';

class UpdateListHikes extends Component {
  handleDelete = () => {
    const { deleteHike, list, hike } = this.props;
    deleteHike(list, hike);
  };

  handleClick = (event, list) => {
    const { addHikeToList, hike } = this.props;
    addHikeToList(list, hike);
  };

  render() {
    const { lists: { lists }, addHikeToList, list, signedIn } = this.props;
    const listItems = lists.map((item) => {
      return (
        <Dropdown.Item
          key={item.name}
          onClick={(e) => this.handleClick(e, item)}
        >
          {item.name}
        </Dropdown.Item>
      );
    });
    listItems.push(
      <CreateListModal
        key="create-list"
        addHikeToList={addHikeToList}
      />,
    );
    return (
      <div>
        <div>
          {signedIn && !list ? (
            <DropdownButton
              id="dropdown-basic-button"
              title="Add to list"
              variant="custom"
              size="sm"
              className="float-right"
            >
              {listItems}
            </DropdownButton>
          ) : null}
        </div>
        <div>
          {list ? (
            <Button
              variant="outline-danger"
              size="sm"
              onClick={this.handleDelete}
              className="float-right"
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
