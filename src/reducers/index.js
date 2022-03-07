import rootReducer from "./rootReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
  rootReducer: rootReducer,
});
export default allReducers;
