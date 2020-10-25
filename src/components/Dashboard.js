import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";
import Poll from "./Poll";
import { Container, Col, Nav } from "react-bootstrap";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchQuestion: false,
    };
  }

  handleChangeAnswered = () => {
    this.setState({
      switchQuestion: true,
    });
  };

  handleChangeUnAnswered = () => {
    this.setState({
      switchQuestion: false,
    });
  };
  render() {
    return (
      <div>
        <NavigationBar />
        <Container>
          <Col xs={6} md={6}>
            <Nav justify variant="tabs" defaultActiveKey="link-1">
              <Nav.Item>
                <Nav.Link
                  eventKey="link-1"
                  onClick={this.handleChangeUnAnswered}
                >
                  Unanswered
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2" onClick={this.handleChangeAnswered}>
                  Answered
                </Nav.Link>
              </Nav.Item>
            </Nav>
            {this.state.switchQuestion === false
              ? this.props.unAnsweredQuestions.map((q) => (
                  <Poll key={q.id} questions={q} />
                ))
              : this.props.answeredQuestions.map((q) => (
                  <Poll key={q.id} questions={q} />
                ))}
          </Col>
        </Container>
      </div>
    );
  }
}

function mapStateToProps({ authedUser, questions, users }) {
  let loggedInUser = users[authedUser];
  let allQuestions = Object.values(questions);
  let loggedinAnswers = loggedInUser ? Object.keys(loggedInUser.answers) : [];
  return {
    questionsAnswered: allQuestions
      .filter((question) => loggedinAnswers.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp),
    unAnsweredQuestions: allQuestions
      .filter((question) => loggedinAnswers.includes(question.id))
      .sort((a, b) => b.timestamp - a.timestamp),
  };
}

export default connect(mapStateToProps)(Dashboard);
