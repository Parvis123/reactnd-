import React, { Component } from "react";
import NavigationBar from "./NavigationBar";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h3 className="center">Would You Rather</h3>
        <NavigationBar />
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
