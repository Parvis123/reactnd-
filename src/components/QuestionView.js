import React, { Component } from "react";
import { connect } from "react-redux";
import Page404 from "./Page404";
import NavigationBar from "./NavigationBar";
import { Card, Form, Button, Badge } from "react-bootstrap";
import { handleAnswer } from "../actions/shared";

class QuestionView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedChoice: null,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      selectedChoice: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { authedUser, dispatch } = this.props;
    const { selectedChoice } = this.state;
    e.preventDefault();
    dispatch(
      handleAnswer(authedUser, selectedChoice, this.props.match.params.id)
    );
  };

  render() {
    if (this.props.error) {
      return <Page404 />;
    }

    let { q, authedUser } = this.props;

    let query = q ? q : "";
    let votedForOptionOne = q ? q.optionOne.votes.includes(authedUser) : null;
    let votedForOptionTwo = q ? q.optionTwo.votes.includes(authedUser) : null;

    return (
      <div>
        <NavigationBar />
        {votedForOptionOne === true || votedForOptionTwo === true ? (
          <Card>
            <Card.Img variant="top" src={this.props.author.avatarURL} />
            <Card.Body>
              <Card.Title>{this.props.author.name} asks</Card.Title>
              <Card.Text>Results</Card.Text>
              <div>
                <div>
                  {votedForOptionOne ? (
                    <Badge pill variant="primary">
                      You voted for this option
                    </Badge>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              Would you rather {query ? query.optionOne.text : ""}
              {votedForOptionTwo ? (
                <Badge pill variant="primary">
                  You voted for this option
                </Badge>
              ) : (
                ""
              )}
              Would you rather {query ? query.optionTwo.text : ""}
            </Card.Body>
          </Card>
        ) : (
          <Card>
            <Card.Img variant="top" src={this.props.author.avatarURL} />
            <Card.Body>
              <Card.Title>{this.props.author.name} asks</Card.Title>
              <Card.Text>Would you rather</Card.Text>
              <Form.Group>
                <Form.Check
                  type="radio"
                  name="select"
                  label={query ? query.optionOne.text : ""}
                  onChange={this.handleChange}
                  value="optionOne"
                />

                <Form.Check
                  type="radio"
                  name="select"
                  label={query ? query.optionTwo.text : ""}
                  onChange={this.handleChange}
                  value="optionTwo"
                />
              </Form.Group>
              <Button variant="danger" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Card.Body>
          </Card>
        )}
      </div>
    );
  }
}

function mapStateToProps({ users, questions, authedUser }, { match }) {
  if (questions[match.params.id] === undefined) {
    const error = true;
    return {
      error,
    };
  }
  let q = questions[match.params.id];
  let author = q ? users[q.author] : "";
  return {
    q: questions[match.params.id],
    authedUser,
    author,
  };
}

export default connect(mapStateToProps)(QuestionView);
