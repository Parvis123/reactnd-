export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const SAVE_QUESTION = "SAVE_QUESTION";
export const SAVE_QUESTION_ANSWER = "SAVE_QUESTION_ANSWER";

export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTION,
    questions,
  };
}
export function saveQuestion(question) {
  return {
    type: SAVE_QUESTION,
    question,
  };
}
export function saveQuestionAnswer(answer, questionId, authedUser) {
  return {
    type: SAVE_QUESTION_ANSWER,
    answer,
    questionId,
    authedUser,
  };
}
