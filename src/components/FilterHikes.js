import React, { Component } from "react";
import {
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Form,
  Button
} from "react-bootstrap";

export default class FilterHikes extends Component {
  blankState = () => {
    return {difficulty: {
    Easiest: false,
    Easy: false,
    Intermediate: false,
    Advanced: false,
  }}}
  // add for duration category to see how many there are

  constructor(props) {
    super(props);
    this.state = 
      this.blankState()
  }
  
  handleClick = (event) => {
    const filter = event.target.value 
    this.setState((prevState) => ({difficulty: {...prevState.difficulty, [filter]: !this.state.difficulty[filter]}}))// just need to abstract this a bit to be able to use for all filters
    
  };

  handleSubmit = () => {
    this.props.fetchData(this.state)
  }

  handleReset = () => {
    this.setState(this.blankState())
    this.props.fetchData(this.blankState())
  };


  render() {
    return (
      <div>
        <div className="filters p-2">
          <ButtonGroup>
            <Button
              value="null"
              onClick={() => {
                this.handleReset();
              }}
              className="btn-custom"
            >
              Clear Filters
            </Button>
            <DropdownButton
              className="btn-custom"
              id="dropdown-basic-button"
              title="Filter Difficulty"
            >
              <Dropdown.Item
                as={Form.Check}
                value="Easiest"
                checked={this.state.difficulty["Easiest"]}
                label={`Easiest`}
                onClick={(event) => {
                  this.handleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Easy"
                checked={this.state.difficulty["Easy"]}
                label={`Easy`}
                onClick={(event) => {
                  this.handleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Intermediate"
                checked={this.state.difficulty["Intermediate"]}
                label={`Intermediate`}
                onClick={(event) => {
                  this.handleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Advanced"
                checked={this.state.difficulty["Advanced"]}
                label={`Advanced`}
                onClick={(event) => {
                  this.handleClick(event);
                }}
              />
            </DropdownButton>
            <Button onClick={(event) => {
                  this.handleSubmit(event);
                }}
                className="btn-custom">Filter</Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}