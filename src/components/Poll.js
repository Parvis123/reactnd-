import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

class Poll extends Component {
  render() {
    let { questionAuthor, questions } = this.props;
    return (
      <div>
        <Card>
          <Card.Img variant="top" src={questionAuthor.avatarURL} />
          <Card.Body>
            <Card.Title>{questionAuthor.name} asks</Card.Title>
            <Card.Text>Would you Rather</Card.Text>
            <Link to={`/question/${questions.id}`}>
              <Button variant="danger" block onClick={this.routeChange}>
                View Poll
              </Button>
            </Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ users }, { questions }) {
  return {
    questionAuthor: users[questions.author],
  };
}

export default connect(mapStateToProps)(Poll);
