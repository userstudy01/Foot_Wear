import React from 'react'

const SignIn = () => {
    return (
        <div className="min-h-screen flex flex-col lg:flex-row">
            {/* Left Side Image with Text */}
            <div className="relative w-full lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-auto">
                <img
                    src={Background}
                    alt="Interior"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
                <div className="relative z-10 text-white px-4 sm:px-8 md:px-12 flex flex-col justify-center h-full">
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
                        Turn Your Ideas into Reality
                    </h1>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-md">
                        Start for free and get attractive offers from the community
                    </p>
                </div>
            </div>

            {/* Right Side Login Form */}
            <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
                <div className="w-full max-w-md px-4 sm:px-8 py-8 sm:py-12">
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">Login</h2>
                    <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base">
                        Welcome Back! Please enter your details.
                    </p>

                    <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>

                        <div>
                            <input
                                type="email"
                                name="Email"
                                className={`w-full px-3 py-2 border rounded-md ${errors.Email ? "border-red-500" : ""
                                    }`}
                                onChange={handleChange}
                                value={SignInInfo.Email}
                                placeholder="Email"
                            />
                            {errors.Email && (
                                <p className="text-red-500 text-xs">{errors.Email}</p>
                            )}
                        </div>
                        <div>
                            <input
                                type="password"
                                name="Password"
                                className={`w-full px-3 py-2 border rounded-md ${errors.Password ? "border-red-500" : ""
                                    }`}
                                onChange={handleChange}
                                value={SignInInfo.Password}
                                placeholder="Password"
                            />
                            {errors.Password && (
                                <p className="text-red-500 text-xs">{errors.Password}</p>
                            )}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-2 mt-5 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
                        >
                            Sign In
                        </button>

                        <Link to={"/signup"}>
                            <button
                                type="button"
                                className="w-full py-2 sm:py-3 border rounded-md hover:bg-gray-100 text-sm sm:text-base"
                            >
                                Sign Up
                            </button>
                        </Link>

                        <div className="flex items-center">
                            <hr className="flex-1 border-gray-300" />
                            <span className="px-2 sm:px-4 text-gray-500 text-xs sm:text-sm">
                                OR
                            </span>
                            <hr className="flex-1 border-gray-300" />
                        </div>

                        <Link to={"google"}>
                            <button
                                type="button"
                                className="w-full py-2 sm:py-3 border flex items-center justify-center space-x-2 rounded-md hover:bg-gray-100 text-sm sm:text-base"
                            >
                                <img
                                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                                    alt="Google"
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                />
                                <span>Sign In With Google</span>
                            </button>
                        </Link>
                    </form>

                    <p className="text-center text-xs sm:text-sm text-gray-600 mt-6">
                        Don’t have an account?{" "}
                        <a href="/signup" className="text-black font-medium hover:underline">
                            Sign up
                        </a>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SignIn