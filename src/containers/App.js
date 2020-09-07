import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';
import Hikes from '../components/Hikes'
import { fetchHikes } from '../actions/hikeActions'

class App extends Component {

  componentDidMount() {
    this.props.fetchHikes()
  }
  render () {
    return (
      <div className="App">
          <div className='container'>
            <h1>Hikable</h1>
            {<Hikes hikes={this.props.hikes}/>}
          </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log(state, "state")
  return {
    hikes: state.hikes,
    loading: state.loading
  }
}
 
const mapDispatchToProps = dispatch => {
  return {
    fetchHikes: () => dispatch(fetchHikes())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
