import React, { useState } from "react";

const AuthForm = () => {
    const [isSignUp, setIsSignUp] = useState(true);

    const toggleForm = () => setIsSignUp(!isSignUp);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(isSignUp ? "Signed Up!" : "Signed In!");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-600 px-4">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-2xl">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
                    {isSignUp ? "Create Account" : "Welcome Back"}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {isSignUp && (
                        <input
                            type="text"
                            placeholder="Full Name"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    )}
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                        required
                    />
                    {isSignUp && (
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            required
                        />
                    )}
                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
                    >
                        {isSignUp ? "Sign Up" : "Sign In"}
                    </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                    {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
                    <button
                        type="button"
                        onClick={toggleForm}
                        className="text-indigo-600 font-medium hover:underline"
                    >
                        {isSignUp ? "Sign In" : "Sign Up"}
                    </button>
                </p>
            </div>
        </div>
    );
};

export default AuthForm;

