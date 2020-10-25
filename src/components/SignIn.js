import React, { Component } from "react";
import { Form, Card, Button } from "react-bootstrap";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";
import { Redirect } from "react-router-dom";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: null,
      redirectToDashboard: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      userId: e.target.value,
    });
  };

  login = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(this.state.userId));
    this.setState({
      redirectToDashboard: true,
    });
  };

  render() {
    const { redirectToDashboard } = this.state;
    if (redirectToDashboard === true) {
      return <Redirect to={"/home"} />;
    }
    return (
      <div>
        <Card>
          <Card.Header as="h5">Would You Rather App</Card.Header>
          <Card.Body>
            <Card.Title>I am</Card.Title>
            <Form>
              <Form.Group controlId="users">
                <Form.Control as="select" onChange={this.handleChange}>
                  <option hidden value="default">
                    Who are you?
                  </option>
                  {this.props.users.map((id) => (
                    <option key={id} value={id}>
                      {id}
                    </option>
                  ))}
                </Form.Control>
              </Form.Group>
              <Button variant="primary" onClick={this.login}>
                Sign in!
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  return {
    users: Object.keys(users),
  };
}

export default connect(mapStateToProps)(SignIn);
