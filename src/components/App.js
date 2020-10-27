import React, { Component, Fragment } from "react";

import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import QuestionView from "./QuestionView";
import AddQuestion from "./AddQuestion";
import Page404 from "./Page404";
import LeaderBoard from "./LeaderBoard";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Route path="/home" exact component={Dashboard} />
          <Route path="/" exact component={SignIn} />
          <Route path="/add" exact component={AddQuestion} />
          <Route path="/leaderboard" exact component={LeaderBoard} />
          <Route path="/question/:id" exact component={QuestionView} />
          <Route path="/404" exact component={Page404} />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
