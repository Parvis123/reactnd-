import {
  RECEIVE_QUESTIONS,
  SAVE_QUESTIONS,
  SAVE_QUESTION_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTIONS:
      return {
        ...state,
        [action.question.id]: action.question,
      };
    case SAVE_QUESTION_ANSWER:
      return {
        ...state,
        ...action.questions,
        // todo
      };
    default:
      return state;
  }
}
