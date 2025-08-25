class ApiResponse {
    constructor(statusCode, message = "Success", data) {
        this.status = statusCode < 400 ? "success" : "error";
        this.message = message;
        this.data = data;
    }
}

module.exports = ApiResponse;