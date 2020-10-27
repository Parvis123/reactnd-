import React, { Component } from "react";
import { connect } from "react-redux";
import NavigationBar from "./NavigationBar";
import LeaderBoardContestant from "./LeaderBoardContestant";

class LeaderBoard extends Component {
  render() {
    return (
      <div>
        <NavigationBar />
        {this.props.sortContestants.map((user) => (
          <LeaderBoardContestant key={user.id} user={user} />
        ))}
      </div>
    );
  }
}

function mapStateToProps({ users }) {
  const sortContestants = Object.values(users).sort((a, b) => {
    let alength = a.answers.length + a.questions.length;
    let blength = b.answers.length + b.questions.length;
    return alength - blength;
  });
  return {
    sortContestants,
  };
}

export default connect(mapStateToProps)(LeaderBoard);
