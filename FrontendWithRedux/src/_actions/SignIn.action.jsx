import { signInConstant } from "../_constants";
import { signInService } from "../_services";
import { alert } from "../_utilities/alert";


export const signInAction = {
  SignInAction
};



function SignInAction(data) {
  return (dispatch) => {
    dispatch(
      dispatchFunction({
        type: signInConstant.SIGNIN_REQUEST,
        data: null,
      })
    );
    console.log("18 data", data);
    console.log("19", { ...data});

    signInService
      .SignInService(data)
      .then(
        (response) => {
          if (response.status === 200) {
            dispatch(
              dispatchFunction({
                type: signInConstant.SIGNIN_SUCCESS,
                data: response,
              })
            );
          } else {
            dispatch(
              dispatchFunction({
                type: signInConstant.SIGNIN_FAILURE,
                data: null,
              })
            );
            alert.error(response.Message);
          }
        },
        (error) => {
          dispatch(
            dispatchFunction({
              type: signInConstant.SIGNIN_FAILURE,
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
