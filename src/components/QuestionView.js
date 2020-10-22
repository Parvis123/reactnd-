import React, { Component } from "react";
import { connect } from "react-redux";
import Page404 from "./Page404";
import NavigationBar from "./NavigationBar";

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
  render() {
    if (!this.props.error) {
      return <Page404 />;
    }
    return (
      <div>
        <h3>Questions</h3>
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
