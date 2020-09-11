import React from 'react'
import { connect } from 'react-redux'
import {fetchLists} from "../actions/listActions"


class ListsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchLists()
  }

    render (){
        return(
            <div className="lists-container">
             Lists should appear here...
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    lists: state.lists
  }
}

   
  const mapDispatchToProps = dispatch => {
    return {
      fetchLists: () => dispatch(fetchLists())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer)