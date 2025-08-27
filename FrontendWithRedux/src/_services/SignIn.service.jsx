import { commonFunctions } from "../_utilities/commonFunction";
import { config } from "../config";

export const signInService = {
    SignInService
}


function SignInService(data) {
    const extraHeaders = {
        "Content-Type": "application/json",
    };
    const requestOptions = commonFunctions.getRequestOption(
        "POST",
        extraHeaders,
        JSON.stringify(data)
    );

    return fetch(`${config.url}/user/register`, requestOptions).then((response) =>
        response.json()
    );
}
