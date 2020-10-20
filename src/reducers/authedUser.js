import { SET_AUTHED_USER, DELETE_AUTHED_USER } from "../actions/authedUser";

export default function (state, action) {
  switch (action.type) {
    case SET_AUTHED_USER:
      return action.id;
    case DELETE_AUTHED_USER:
      return action.id;
    default:
      return state;
  }
}
