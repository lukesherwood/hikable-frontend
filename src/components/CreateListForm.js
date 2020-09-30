import React, { Component } from "react";
import {connect} from 'react-redux'
import {createList} from '../actions/listActions'

class CreateListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: ""
    };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description } = this.state;
    let list = {
      name: name,
      description: description,
      user_id: this.props.currentUser.id
    };
    console.log(list)
    this.props.createList(list)
    // this.props.history.push('/');
  };

  render() {
    const { name, description } = this.state;
    return (
      <div>
        <h2>Create a new list</h2>
        <form onSubmit={(event) => this.handleSubmit(event)}>
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={(event) => this.handleChange(event)}
              value={name}
            />
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              name="description"
              onChange={(event) => this.handleChange(event)}
              value={description}
            />
          </div>
          <input type="submit" value="Create List" />
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
      createList: (listInfo) => dispatch(createList(listInfo)),
    };
  };

export default connect(null, mapDispatchToProps)(CreateListForm)
