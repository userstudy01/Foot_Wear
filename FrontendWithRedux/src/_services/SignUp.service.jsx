import { commonFunctions } from "../_utilities/commonFunction";
import { config } from "../config";

export const SignupService = {
    SignUpService
}


function SignUpService(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOption(
        "POST",
        extraHeaders,
        JSON.stringify(data)
    );

   return fetch(`${config.url}/user/register`, requestOptions).then(async (response) => {
    const json = await response.json();
    return {
      httpStatus: response.status,  
      ...json                       
    };
  });
}