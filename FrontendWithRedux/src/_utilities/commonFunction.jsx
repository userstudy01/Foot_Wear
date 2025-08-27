export const commonFunctions = {
  getRequestOption
};

function getRequestOption(type,extraHeaders,body){
    let requestOptions = {
        method:type,
        headers:{
            ...extraHeaders
        },
    };
    if(body){
        requestOptions["body"] = body;
    }
    return requestOptions
}