import React from 'react'
import { connect } from 'react-redux'
import {fetchLists} from "../actions/listActions"
import Lists from "../components/Lists"


class ListsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchLists()
  }

    render (){
        return(
            <div className="lists-container">
             <Lists lists={this.props.lists} fetchLists={this.props.fetchLists}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    lists: state.lists.lists
  }
}

   
  const mapDispatchToProps = dispatch => {
    return {
      fetchLists: () => dispatch(fetchLists())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(ListsContainer)