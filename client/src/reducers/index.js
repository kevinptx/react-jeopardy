import { combineReducers } from "redux";
import cards from "./cards";
import categories from "./categories";

const rootReducer = combineReducers({
  cards,
  categories
});

export default rootReducer;
