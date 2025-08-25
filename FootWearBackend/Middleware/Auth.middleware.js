const UserModel = require("../Model/user.model");
const ApiError = require("../utils/apiError");
const asyncHandler = require("../utils/asyncHandler");
const jwt = require("jsonwebtoken");

const verifyJWT = asyncHandler(async (req, res, next) => {
    try {
        const token =
            req.cookies?.accessToken ||
            req.headers("Authorization")?.replace("Bearer ", "");

        if (!token) {
            throw new ApiError(401, ["Access token is missing"]);
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        const user = await UserModel.findById(decoded.id).select(
            "-Password -refreshToken"
        );

        if (!user) {
            throw new ApiError(404, ["Inavalid Access Token"]);
        }

        req.user = user;
        next();
    } catch (error) {
        throw new ApiError(401, [error.message]);
    }
});

module.exports = { verifyJWT };
