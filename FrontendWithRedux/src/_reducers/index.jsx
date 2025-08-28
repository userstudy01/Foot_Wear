import { combineReducers } from "redux";
import { SignUp } from "./SignUp.reducer";

const appReducers = combineReducers({
  SignUp
});

const rootreducer = (state, action) => {
  return appReducers(state, action);
};

export default rootreducer;
