import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../scss/App.scss';

import { NotificationContainer } from 'react-notifications';
import Container from 'react-bootstrap/Container';
import HikesContainer from './HikesContainer';
import ListsContainer from './ListsContainer';
import Home from '../components/Home';
import NavbarClass from './Navbar';
import ListShow from '../components/ListShow';

import { autoLogin, logUserOut } from '../actions/userActions';

import 'react-notifications/lib/notifications.css';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Footer from '../components/Footer';
import { fetchLists } from '../actions/listActions';
import { fetchHikes, fetchHike } from '../actions/hikeActions';
import HikeShow from '../components/HikeShow';
import UserProfile from '../components/UserProfile';
import ScrollTop from '../components/ScrollTop';
import { Unauthorized } from '../components/Unauthorized';

class App extends Component {
  componentDidMount() {
    const { doAutoLogin, doFetchLists, doFetchHikes } = this.props;
    doAutoLogin();
    doFetchLists();
    doFetchHikes();
    window.scrollTo(0, 0);
  }

  render() {
    const {
      doFetchHike, hikes, loggedIn, lists, user,
    } = this.props;
    return (
      <div className="App">
        <NavbarClass />
        <ScrollTop>
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hikes" element={<HikesContainer />} />
              <Route
                path="/hikes/:id"
                element={
                  <HikeShow fetchHike={doFetchHike} hikes={hikes} />
                }
              />
              <Route
                path="/lists"
                element={loggedIn ? <ListsContainer loggedIn={loggedIn} /> : <Unauthorized />}
              />
              <Route
                path="/lists/:id"
                // check user is the owner of this list
                element={loggedIn ? <ListShow lists={lists} loggedIn={loggedIn} /> : <Unauthorized />}
              />
              <Route
                path="user"
                element={loggedIn ? <UserProfile user={user} loggedIn={loggedIn} /> : <Unauthorized />}
              />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>
          </Container>
          <NotificationContainer />
        </ScrollTop>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.users.loggedIn,
  lists: state.lists.lists,
  hikes: state.hikes.hikes,
  user: state.users.user,
});

const mapDispatchToProps = (dispatch) => ({
  doAutoLogin: () => dispatch(autoLogin()),
  doLogUserOut: () => dispatch(logUserOut()),
  doFetchLists: () => dispatch(fetchLists()),
  doFetchHikes: () => dispatch(fetchHikes()),
  doFetchHike: (id) => dispatch(fetchHike(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
