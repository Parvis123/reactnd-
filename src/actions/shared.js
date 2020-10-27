import { showLoading, hideLoading } from "react-redux-loading";
import { receiveUsers, saveUserAnswer, saveUserQuestion } from "./users";
import {
  getInitialData,
  saveQuestionAnswerApi,
  saveQuestionApi,
} from "../utils/api";
import {
  saveQuestion,
  saveQuestionAnswer,
  receiveQuestions,
} from "./questions";

export function handleInitialData() {
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveQuestions(questions));
      dispatch(receiveUsers(users));
      dispatch(hideLoading());
    });
  };
}

export function handleSaveQuestion(firstOptionText, secondOptionText, author) {
  const question = {
    firstOptionText: firstOptionText,
    secondOptionText: secondOptionText,
    author: author,
  };
  return (dispatch) => {
    return saveQuestionApi(question).then((q) => {
      dispatch(saveQuestion(q));
      dispatch(saveUserQuestion(q.author, q.questionId));
    });
  };
}

export function handleAnswer(authedUser, questionId, answer) {
  return (dispatch) => {
    dispatch(saveQuestionAnswer(authedUser, questionId, answer));
    dispatch(saveUserAnswer(authedUser, questionId, answer));
    return saveQuestionAnswerApi({
      authedUser: authedUser,
      questionId: questionId,
      answer: answer,
    });
  };
}
