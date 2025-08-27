import { combineReducers } from "redux";
import { signIn } from "./SignIn.reducer";

const appReducers = combineReducers({
 signIn
});

const rootreducer = (state, action) => {
  return appReducers(state, action);
};

export default rootreducer;
