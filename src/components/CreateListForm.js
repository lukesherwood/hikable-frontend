import React, { Component } from "react";
import { connect } from "react-redux";
import { createList } from "../actions/listActions";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button"


class CreateListForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      description: "",
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
      user_id: this.props.currentUser.id,
    };
    this.props.createList(list);
  };

  render() {
    const { name, description } = this.state;
    return (
      <div className="list-card">
        <h3>Create a new list</h3>
        <Form inline onSubmit={(event) => this.handleSubmit(event)}>
          <Form.Group>
            <Form.Label size="sm"> Name </Form.Label>
            <Form.Control
              required
              type="text"
              className="mb-2 mr-sm-2"
              size="sm"
              name="name"
              onChange={(event) => this.handleChange(event)}
              value={name}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label size="sm"> Description </Form.Label>
            <Form.Control
              className="mb-2 mr-sm-2"
              type="text"
              size="sm"
              name="description"
              onChange={(event) => this.handleChange(event)}
              value={description}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Create List
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    createList: (listInfo) => dispatch(createList(listInfo)),
  };
};

export default connect(null, mapDispatchToProps)(CreateListForm);
