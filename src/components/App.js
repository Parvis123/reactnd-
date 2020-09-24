import React, { Component } from "react";
import "../App.css";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import LoadingBar from "react-redux-loading";

import SignIn from "./SignIn";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        <SignIn />
      </div>
    );
  }
}

export default connect()(App);
