import React, { Component } from "react";
import {
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";

export default class FilterHikes extends Component {
  blankState = () => {
    return {
      difficulty: {
        Easiest: false,
        Easy: false,
        Intermediate: false,
        Advanced: false,
      },
      duration_category: {
        '["Under 1 hour"]': false,
        '["1-4 hours"]': false,
        '["Over 4 hours"]': false,
        '["Multi-night"]': false,
      },
    };
  };
  // add for duration category to see how many there are

  constructor(props) {
    super(props);
    this.state = this.blankState();
  }

  difficultyHandleClick = (event) => {
    const filter = event.target.value;
    this.setState((prevState) => ({
      difficulty: {
        ...prevState.difficulty,
        [filter]: !this.state.difficulty[filter],
      },
    })); // just need to abstract this a bit to be able to use for all filters
  };

  durationHandleClick = (event) => {
    const filter = event.target.value;
    this.setState((prevState) => ({
      duration_category: {
        ...prevState.duration_category,
        [filter]: !this.state.duration_category[filter],
      },
    }));
  };

  handleSubmit = () => {
    this.props.fetchData(this.state);
  };

  handleReset = () => {
    this.setState(this.blankState());
    this.props.fetchData(this.blankState());
  };

  countTrueValues = (object) => {
    return Object.values(object).filter((item) => item === true).length;
  };

  render() {
    return (
      <div className="pb-3 d-flex justify-content-center">
        <div className="filters">
          <ButtonGroup>
            <DropdownButton
              variant="outline-secondary"
              className="square"
              id="dropdown-basic-button"
              title={
                this.countTrueValues(this.state.difficulty) > 0
                  ? `Difficulty (${this.countTrueValues(
                      this.state.difficulty
                    )})`
                  : "Difficulty"
              }
            >
              <Dropdown.Item
                as={Form.Check}
                value="Easiest"
                id="Easiest"
                defaultChecked={this.state.difficulty["Easiest"]}
                label={`Easiest`}
                onClick={(event) => {
                  this.difficultyHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Easy"
                id="Easy"
                defaultChecked={this.state.difficulty["Easy"]}
                label={`Easy`}
                onClick={(event) => {
                  this.difficultyHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Intermediate"
                id="Intermediate"
                defaultChecked={this.state.difficulty["Intermediate"]}
                label={`Intermediate`}
                onClick={(event) => {
                  this.difficultyHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Advanced"
                id="Advanced"
                defaultChecked={this.state.difficulty["Advanced"]}
                label={`Advanced`}
                onClick={(event) => {
                  this.difficultyHandleClick(event);
                }}
              />
            </DropdownButton>
            <DropdownButton
              variant="outline-secondary"
              id="dropdown-basic-button"
              title={
                this.countTrueValues(this.state.duration_category) > 0
                  ? `Duration (${this.countTrueValues(
                      this.state.duration_category
                    )})`
                  : "Duration"
              }
            >
              <Dropdown.Item
                as={Form.Check}
                value='["Under 1 hour"]'
                id="Under 1 Hour"
                defaultChecked={this.state.duration_category['["Under 1 hour"]']}
                label={`Short`}
                onClick={(event) => {
                  this.durationHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value='["1-4 hours"]'
                id="Under 4 Hours"
                defaultChecked={this.state.duration_category['["1-4 hours"]']}
                label={`1 - 4 Hours`}
                onClick={(event) => {
                  this.durationHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value='["Over 4 hours"]'
                id="Over 4 Hours"
                defaultChecked={this.state.duration_category['["Over 4 hours"]']}
                label={`Over 4 Hours`}
                onClick={(event) => {
                  this.durationHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value='["Multi-night"]'
                id="Multi-day"
                defaultChecked={this.state.duration_category['["Multi-night"]']}
                label={`Multi Day`}
                onClick={(event) => {
                  this.durationHandleClick(event);
                }}
              />
            </DropdownButton>
            <Button
              onClick={(event) => {
                this.handleSubmit(event);
              }}
              className="btn-custom"
            >
              Filter
            </Button>
            <Button
              value="null"
              onClick={() => {
                this.handleReset();
              }}
              variant="outline-danger"
            >
              Clear
            </Button>
          </ButtonGroup>
        </div>
      </div>
    );
  }
}
