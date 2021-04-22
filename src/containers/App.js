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
import { fetchHikes, fetchHike } from "../actions/hikeActions";
import Container from "react-bootstrap/Container";
import HikeShow from "../components/HikeShow";
import AuthRoutes from "../components/AuthRoutes";
import UserProfile from '../components/UserProfile'
import ScrollTop from "../components/ScrollTop";

class App extends Component {
  componentDidMount() {
    this.props.autoLogin();
    this.props.fetchLists();
    this.props.fetchHikes();
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="App">
        <NavbarClass />
          <ScrollTop>
        <Container>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/hikes" component={HikesContainer} />
            <Route
              path="/hikes/:id"
              render={(params) => (
                <HikeShow fetchHike={this.props.fetchHike} hikes={this.props.hikes} params={params} />
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
            <AuthRoutes
              path="/user"
              loggedIn={this.props.loggedIn}
              render={(params) => (
                <UserProfile user={this.props.user} />
              )}
            />
            <Route exact path="/signIn" component={SignIn} />
            <Route exact path="/signUp" component={SignUp} />
          </Switch>
          <NotificationContainer />
        </Container>
          </ScrollTop>
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
    user: state.users.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    autoLogin: () => dispatch(autoLogin()),
    logUserOut: () => dispatch(logUserOut()),
    fetchLists: () => dispatch(fetchLists()),
    fetchHikes: () => dispatch(fetchHikes()),
    fetchHike: (id) => dispatch(fetchHike(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
