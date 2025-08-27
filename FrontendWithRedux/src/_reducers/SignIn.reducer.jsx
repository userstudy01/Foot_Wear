import { signInConstant } from "../_constants";
import { status } from "../_constants/commonUse";

let initialState = {};

export function signIn(state = initialState, action) {
  switch (action.type) {
    case signInConstant.SIGNIN_REQUEST:
      return {
        ...state,
        signIn_status: status.IN_PROGRESS,
        signIn_data: null,
      };
    case signInConstant.SIGNIN_SUCCESS:
      return {
        ...state,
        signIn_status: status.SUCCESS,
        signIn_data: action.data,
      };
    case signInConstant.SIGNIN_FAILURE:
      return {
        ...state,
        signIn_status: status.FAILURE,
        signIn_data: action.data,
      };
      default:
        return state;
  }
}
