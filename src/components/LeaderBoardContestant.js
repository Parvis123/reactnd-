import React, { Component } from "react";
import { Card } from "react-bootstrap";

class LeaderBoardContestant extends Component {
  render() {
    const { user } = this.props;
    return (
      <Card>
        <Card.Img variant="top" src={user.avatarURL} />
        <Card.Body>
          <Card.Title>{user.name}</Card.Title>
          <div>Created Questions : {user.questions.length}</div>
          <div>Answered Questions : {Object.keys(user.answers).length}</div>
          <div>
            Created Questions :{" "}
            {user.questions.length + Object.keys(user.answers).length}
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default LeaderBoardContestant;
