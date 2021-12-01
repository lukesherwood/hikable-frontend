import React from 'react';
import { connect } from 'react-redux';
import { deleteList, fetchLists } from '../actions/listActions';
import Lists from '../components/Lists';

class ListsContainer extends React.Component {
  componentDidMount() {
    const { fetchLists } = this.props;
    fetchLists();
    document.title = 'My Lists | Hikable';
  }

  render() {
    const { lists, currentUser, deleteList } = this.props;
    return (
      <div className="lists-container">
        <Lists
          lists={lists}
          currentUser={currentUser}
          deleteList={deleteList}
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
