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
import Question from "./Question";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <Route path="/" exact component={Dashboard} />
          <Route path="/signin" exact component={SignIn} />
          <Route path="/question" exact component={QuestionView} />
        </Fragment>
      </Router>
    );
  }
}

export default connect()(App);
