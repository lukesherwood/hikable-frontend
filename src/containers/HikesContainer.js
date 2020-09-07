import React from 'react'
import { fetchHikes } from '../actions/hikeActions'
import { connect } from 'react-redux'
import Hikes from '../components/Hikes'

class HikesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchHikes()
  }

    render (){
        return(
            <div>
                <Hikes hikes={this.props.hikes} fetchHikes={this.props.fetchHikes}/>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return {
    hikes: state.hikes
  }
}

   
  const mapDispatchToProps = dispatch => {
    return {
      fetchHikes: () => dispatch(fetchHikes())
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(HikesContainer)