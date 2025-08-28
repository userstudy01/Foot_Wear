import { SignUpConstant } from "../_constants";
import { SignupService } from "../_services";
import { alert } from "../_utilities/alert";


export const SignupAction = {
  SignUpAction
};



function SignUpAction(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: SignUpConstant.SignUp_REQUEST,
        data: null,
      })
    );
    console.log("18 data", data);
    console.log("19", { ...data });

    SignupService
      .SignUpService(data)
      .then(
        (response) => {
          console.log("Signup Response:", response);
          if (response.httpStatus === 200) {
            dispatch(
              dispatchFunction({
                type: SignUpConstant.SignUp_SUCCESS,
                data: response,
              })
            );
          } else {
            dispatch(
              dispatchFunction({
                type: SignUpConstant.SignUp_FAILURE,
                data: null,
              })
            );
            alert.error(response.Message);
          }
        },
        (error) => {
          dispatch(
            dispatchFunction({
              type: SignUpConstant.SignUp_FAILURE,
              data: error,
            })
          );
          alert.error("Oops! Something went wrong!!");
        }
      )
      .catch(() => {
        alert.error("Oops! Something went wrong!!");
      });
  };
}

function dispatchFunction(data) {
  return {
    type: data.type,
    data: data.data,
  };
}
