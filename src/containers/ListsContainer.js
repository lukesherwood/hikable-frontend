import React from "react";
import { connect } from "react-redux";
import { deleteList, fetchLists } from "../actions/listActions";
import Lists from "../components/Lists";
// import CreateListForm from '../components/CreateListForm';

class ListsContainer extends React.Component {
  componentDidMount() {
    this.props.fetchLists();
  }

  render() {
    return (
      <div className="lists-container">
        <Lists
          lists={this.props.lists}
          currentUser={this.props.currentUser}
          deleteList={this.props.deleteList}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    lists: state.lists.lists,
    currentUser: state.users.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchLists: () => dispatch(fetchLists()),
    deleteList: (list) => dispatch(deleteList(list)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer);
