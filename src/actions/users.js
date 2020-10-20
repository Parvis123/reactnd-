export const RECEIVE_USERS = "RECEIVE USERS";
export const SAVE_USER_QUESTION = "SAVE_USER_QUESTION";
export const SAVE_USER_ANSWER = "SAVE_USER_ANSWER";

export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function saveUserQuestion(user, questionId) {
  return {
    type: SAVE_USER_QUESTION,
    user,
    questionId,
  };
}

export function saveUserAnswer(user, questionId, answer) {
  return {
    type: SAVE_USER_ANSWER,
    user,
    questionId,
    answer,
  };
}
