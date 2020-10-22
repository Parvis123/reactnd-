import React, { Component } from "react";
import { connect } from "react-redux";
import { Navbar, Nav, Button, Image } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";

import { deleteAuthedUser } from "../actions/authedUser";

class NavigationBar extends Component {
  logout = () => {
    this.props.dispatch(deleteAuthedUser());
  };

  render() {
    const { loggedInUser } = this.props;
    if (this.props.authedUser === "") {
      return <Redirect to="/" />;
    }

    return (
      <Navbar variant="dark">
        <Nav>
          <Link className="navbar-link" to="/">
            Home
          </Link>
          <Link className="navbar-link" to="/add">
            New Question
          </Link>
          <Link className="navbar-link" to="/leaderboard">
            Leader Board
          </Link>
        </Nav>
        <Nav>
          <div>Hello, {loggedInUser.name}</div>
          <Image src={loggedInUser.avatarURL} rounded />
          <Button onClick={this.logout}>Logout</Button>
        </Nav>
      </Navbar>
    );
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    loggedInUser: users[authedUser],
    authedUser,
  };
}

export default connect(mapStateToProps)(NavigationBar);
