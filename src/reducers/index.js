import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import authedUser from "./authedUser";
import question from "./question";
import users from "./users";

export default combineReducers({
  authedUser,
  question,
  users,
  loadingBar: loadingBarReducer,
});
