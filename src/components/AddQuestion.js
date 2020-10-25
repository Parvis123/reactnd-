import React, { Component } from "react";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { handleSaveQuestion } from "../actions/shared";

class Question extends Component {
  constructor(props) {
    super(props);
    this.state = {
      option1: null,
      option2: null,
    };
  }

  handleChangeOption1 = (e) => {
    e.preventDefault();
    this.setState({
      option1: e.target.value,
    });
  };
  handleChangeOption2 = (e) => {
    e.preventDefault();
    this.setState({
      option2: e.target.value,
    });
  };

  submitQuestion = (e) => {
    let { authedUser } = this.props;
    let { option1, option2 } = this.state;
    e.preventDefault();
    this.props.dispatch(handleSaveQuestion(authedUser, option1, option2));
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <h3>Would you Rather...</h3>
        <Form>
          <Form.Group>
            <Form.Control
              onChange={this.handleChangeOption1}
              type="text"
              placeholder="Option One"
            />
            <p>Or</p>
            <Form.Control
              onChange={this.handleChangeOption2}
              type="text"
              placeholder="Option Two"
            />
          </Form.Group>
          <Button variant="success" onClick={this.submitQuestion}>
            Add Question
          </Button>
        </Form>
      </div>
    );
  }
}

export function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(Question);
