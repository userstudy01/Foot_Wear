const UserModel = require("../Model/user.model.js");
const ApiError = require("../utils/apiError.js");
const ApiResponse = require("../utils/apiResponse.js");
const asyncHandler = require("../utils/asyncHandler.js");
// const bcrypt = require("bcrypt");
// const crypto = require("crypto");

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            throw new ApiError(404, ["User not found"]);
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save();

        return { accessToken, refreshToken };
    } catch (error) {
        throw new ApiError(500, [
            "Error generating access and refresh tokens: " + error.message,
        ]);
    }
};

const registerUser = asyncHandler(async (req, res) => {
    try {
        console.log("Received registration request:", req.body);

        const { FullName, Email, Password, ConfirmPassword, Phone_Number } = req.body;
        console.log("Registering user:", { FullName, Email });

        // const cryptoToken = crypto.randomBytes(32).toString("hex");
        // console.log("Generated crypto token:", cryptoToken);

        const existingUser = await UserModel.find({ Email });
        if (existingUser.length > 0) {
            throw new ApiError(400, ["User already exists"]);
        }

        if (Password !== ConfirmPassword) {
            throw new ApiError(400, ["Passwords do not match"]);
        }

        if (!(Phone_Number.length >= 10)) {
            throw new ApiError(400, ["Please enter mobile number correct!!"])
        }

        // const bcryptPassword = await bcrypt.genSalt(10);
        // const hashedPassword = await bcrypt.hash(password, bcryptPassword);

        const saveUser = await UserModel({
            FullName,
            Email,
            Password,
            Phone_Number
        });

        await saveUser.save();
        return res
            .status(200)
            .json(new ApiResponse(200, "User registered successfully", { saveUser }));
    } catch (error) {
        throw new ApiError(500, [error.message]);
    }
});

const loginUser = asyncHandler(async (req, res) => {
    try {
        const { Email, Password } = req.body;
        console.log("Login attempt for user:", Email);

        const user = await UserModel.findOne({ Email });
        if (!user) {
            throw new ApiError(404, ["User not found"]);
        }

        const isPasswordCorrect = await user.isPasswordCorrect(Password);
        if (!isPasswordCorrect) {
            throw new ApiError(401, ["Invalid email or password"]);
        }

        const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
            user._id
        );

        const loggedInUser = await UserModel.findById(user._id).select(
            "-Password -refreshToken"
        );

        const options = {
            httpOnly: true, // cookie modify by only server
            secure: true, // cookie only sent over HTTPS
        };

        return res
            .status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", refreshToken, options)
            .json(
                new ApiResponse(200, "User logged in successfully", {
                    user: loggedInUser,
                    accessToken,
                    refreshToken,
                })
            );
    } catch (error) {
        throw new ApiError(500, [error.message]);
    }
});

module.exports = {
    registerUser,
    loginUser,
};
