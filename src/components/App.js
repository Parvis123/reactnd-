import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";

import SignIn from "./SignIn";
import Dashboard from "./Dashboard";
import NavigationBar from "./NavigationBar";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        <Dashboard />
        <NavigationBar />
      </div>
    );
  }
}

export default connect()(App);
