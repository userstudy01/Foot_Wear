import { SignUpConstant } from "../_constants";
import { status } from "../_constants/commonUse";

let initialState = {};

export function SignUp(state = initialState, action) {
  switch (action.type) {
    case SignUpConstant.SignUp_REQUEST:
      return {
        ...state,
        SignUp_status: status.IN_PROGRESS,
        SignUp_data: null,
      };
    case SignUpConstant.SignUp_SUCCESS:
      return {
        ...state,
        SignUp_status: status.SUCCESS,
        SignUp_data: action.data,
      };
    case SignUpConstant.SignUp_FAILURE:
      return {
        ...state,
        SignUp_status: status.FAILURE,
        SignUp_data: action.data,
      };
    default:
      return state;
  }
}
