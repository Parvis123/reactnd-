import { combineReducers } from "redux";
import { loadingBarReducer } from "react-redux-loading";
import authedUser from "./authedUser";
import question from "./question";

export default combineReducers({
  authedUser,
  question,
  loadingBar: loadingBarReducer,
});
