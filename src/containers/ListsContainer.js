import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from "react-router-dom";
import {fetchLists} from "../actions/listActions"
import Lists from "../components/Lists"


class ListsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchLists()
  }

    render (){
      if (this.props.error){
        return (
          <div>
            You need to 
            <NavLink to="/signIn" exact> Sign up/Sign in</NavLink> 
            to access lists
          </div>
        )
      }
        return(
            <div className="lists-container">
             <Lists lists={this.props.lists} fetchLists={this.props.fetchLists}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    lists: state.lists.lists,
    error: state.lists.error
  }
}

   
  const mapDispatchToProps = dispatch => {
    return {
      fetchLists: () => dispatch(fetchLists())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer)