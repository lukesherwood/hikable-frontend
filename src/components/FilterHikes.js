import React, { Component } from "react";
import { fetchHikes } from "../actions/hikeActions";
import {
  ButtonGroup,
  DropdownButton,
  Dropdown,
  Form,
  Button,
} from "react-bootstrap";
import { connect } from "react-redux";

class FilterHikes extends Component {
  blankState = () => {
    return {
      difficulty: {
        Easiest: false,
        Easy: false,
        Intermediate: false,
        Advanced: false,
      },
      duration_category: {
        "Under 1 hour": false,
        "1-4 hours": false,
        "Over 4 hours": false,
        "Multi-night": false,
      },
    };
  };

  constructor(props) {
    super(props);
    console.log(this.props, "init")
    this.state = {...this.blankState(), ...this.props.filterData}
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
    this.props.fetchHikes(this.state);
  };

  handleReset = () => {
    this.setState(this.blankState());
    this.props.fetchHikes('Reset');
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
                checked={this.state.difficulty["Easiest"]}
                label={`Easiest`}
                onChange={(event) => {
                  this.difficultyHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Easy"
                id="Easy"
                checked={this.state.difficulty["Easy"]}
                label={`Easy`}
                onChange={(event) => {
                  this.difficultyHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Intermediate"
                id="Intermediate"
                checked={this.state.difficulty["Intermediate"]}
                label={`Intermediate`}
                onChange={(event) => {
                  this.difficultyHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Advanced"
                id="Advanced"
                checked={this.state.difficulty["Advanced"]}
                label={`Advanced`}
                onChange={(event) => {
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
                value="Under 1 hour"
                id="Under 1 Hour"
                checked={this.state.duration_category["Under 1 hour"]}
                label={`Short`}
                onChange={(event) => {
                  this.durationHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="1-4 hours"
                id="Under 4 Hours"
                checked={this.state.duration_category["1-4 hours"]}
                label={`1 - 4 Hours`}
                onChange={(event) => {
                  this.durationHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Over 4 hours"
                id="Over 4 Hours"
                checked={this.state.duration_category["Over 4 hours"]}
                label={`Over 4 Hours`}
                onChange={(event) => {
                  this.durationHandleClick(event);
                }}
              />
              <Dropdown.Item
                as={Form.Check}
                value="Multi-night"
                id="Multi-day"
                checked={this.state.duration_category["Multi-night"]}
                label={`Multi Day`}
                onChange={(event) => {
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

const mapStateToProps = (state) => {
  return {
    filterData: state.hikes.filterData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchHikes: (filterBy, keyword, page) => dispatch(fetchHikes(filterBy, keyword, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterHikes)
