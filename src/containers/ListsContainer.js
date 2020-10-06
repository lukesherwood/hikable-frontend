import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import {fetchLists} from "../actions/listActions"
import Lists from "../components/Lists"
import CreateListForm from '../components/CreateListForm';


class ListsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchLists()
  }

    render (){
      if (this.props.error){
        return (
          <div>
            You need to 
            <NavLink to="/signIn" exact> Sign in </NavLink>  or
            <NavLink to="/signUp" exact> Sign up </NavLink> 
             to access lists
          </div>
        )
      }
        return(
            <div className="lists-container">
              <CreateListForm currentUser={this.props.currentUser} />
              <Lists lists={this.props.lists}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    lists: state.lists.lists,
    error: state.lists.error,
    currentUser: state.users.user
  }
}

   
  const mapDispatchToProps = dispatch => {
    return {
      fetchLists: () => dispatch(fetchLists()),
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer)