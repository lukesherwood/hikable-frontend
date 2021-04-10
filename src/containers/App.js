import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import "../scss/App.scss";

import HikesContainer from "./HikesContainer";
import ListsContainer from "./ListsContainer";
import Home from "../components/Home";
import NavbarClass from "./Navbar";
import ListShow from "../components/ListShow";

import { autoLogin, logUserOut } from "../actions/userActions";

import "react-notifications/lib/notifications.css";
import { NotificationContainer } from "react-notifications";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Footer from "../components/Footer";
import { fetchLists } from "../actions/listActions";
import { fetchHikes } from "../actions/hikeActions";
import Container from "react-bootstrap/Container";
import HikeShow from "../components/HikeShow";
import AuthRoutes from "../components/AuthRoutes";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin(this.props);
    this.props.fetchLists();
    this.props.fetchHikes();
  }

  render() {
    return (
      <div className="App">
        <NavbarClass />
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hikes" component={HikesContainer} />
            <Route
              path="/hikes/:id"
              render={(params) => (
                <HikeShow hikes={this.props.hikes} params={params} />
              )}
            />
            <AuthRoutes
              exact
              path="/lists"
              loggedIn={this.props.loggedIn}
              component={ListsContainer}
            />
            <AuthRoutes
              path="/lists/:id"
              loggedIn={this.props.loggedIn}
              render={(params) => (
                <ListShow lists={this.props.lists} params={params} />
              )}
            />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
            <NotificationContainer />
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loggedIn: state.users.loggedIn,
    lists: state.lists.lists,
    hikes: state.hikes.hikes,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    autoLogin: (props) => dispatch(autoLogin(props)),
    logUserOut: () => dispatch(logUserOut()),
    fetchLists: () => dispatch(fetchLists()),
    fetchHikes: () => dispatch(fetchHikes()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
