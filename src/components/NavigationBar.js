import React, { Component } from "react";
import { Navbar, Nav, Button, Image } from "react-bootstrap";

class NavigationBar extends Component {
  render() {
    return (
      <Navbar>
        <Nav>
          <h1>Home</h1>
          <h1>New Question</h1>
          <h3>Leader Board</h3>
        </Nav>
        <Nav>
          <div>Hello, *todo loggedinusername*</div>
          <div>Image here</div>
          <Button>Logout</Button>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
