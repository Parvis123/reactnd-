import {
  RECEIVE_QUESTION,
  SAVE_QUESTION,
  SAVE_QUESTION_ANSWER,
} from "../actions/questions";

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTION:
      return {
        ...state,
        ...action.questions,
      };
    case SAVE_QUESTION:
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
