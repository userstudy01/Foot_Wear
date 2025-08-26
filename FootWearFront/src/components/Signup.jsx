// import React, { useState } from "react";
// import Background from "../assets/bg-1.jpg";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { handleError, handleSuccess } from "../Utils";
// // import { application } from 'express';

// const Signup = () => {
//     const navigate = useNavigate();

//     const [signUPInfo, setSignUpInfo] = useState({
//         FullName: "",
//         Email: "",
//         Phone_Number: "",
//         Password: "",
//         ConfirmPassword: "",
//     });

//     const [errors, setErrors] = useState({})

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(name, value);
//         setSignUpInfo((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));

//         setErrors((prev) => ({
//             ...prev,
//             [name]: "",
//         }));
//     };

//     const validate = () => {
//         let newErrors = {};

//         if (!signUPInfo.FullName) newErrors.FullName = "Full Name is Require";
//         if (!signUPInfo.Phone_Number) newErrors.Phone_Number = "Phone number is required";
//         if (!signUPInfo.Email) newErrors.Email = "Email is required";
//         if (!signUPInfo.Password) newErrors.Password = "Password is required";
//         if (!signUPInfo.ConfirmPassword) {
//             newErrors.ConfirmPassword = "Confirm Password is required";
//         } else if (signUPInfo.Password !== signUPInfo.ConfirmPassword) {
//             newErrors.ConfirmPassword = "Passwords do not match";
//         }

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0; // return true if no errors
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (!validate()) return;
//         // const { FullName, Email, Phone_Number, Password, ConfirmPassword } = signUPInfo;

//         // if (!FullName || !Email || !Phone_Number || !Password || !ConfirmPassword) {
//         //     return handleError("Please fill all fields!");
//         // }

//         // if (Password !== ConfirmPassword) {
//         //     return handleError("Passwords do not match!");
//         // }

//         try {
//             const url = "http://localhost:8000/api/user/register";
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(signUPInfo),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 handleSuccess("Registered successfully...");
//                 navigate("/signin");
//             } else {
//                 handleError(result.message || "Registration failed");
//             }
//         } catch (error) {
//             handleError("Server error, please try again later");
//         }
//     };


//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const { FullName, Email, Phone_Number, Password, ConfirmPassword } =
//     //         signUPInfo;
//     //     if (!FullName || !Email || !Phone_Number || !Password || !ConfirmPassword) {
//     //         return "Please fill All the field!";
//     //     }
//     //     try {
//     //         const url = "http://localhost:8000/api/user/register";
//     //         const response = await fetch(url, {
//     //             method: "POST",
//     //             headers: {
//     //                 "content-type": "application/json",
//     //             },
//     //             body: JSON.stringify(signUPInfo),
//     //         });
//     //         const result = await response.json();
//     //         if (result.status === 200) {
//     //             return handleSuccess('Rigister succefully...')
//     //         }
//     //     } catch (error) {
//     //         return handleError('All Feilds must be Require')
//     //     }
//     // };

//     return (
//         <div className="min-h-screen flex flex-col lg:flex-row">
//             {/* Left Side Image with Text */}
//             <div className="relative w-full lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-auto">
//                 <img
//                     src={Background}
//                     alt="Interior"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 {/* gradient overlay for readability, very light */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

//                 <div className="relative z-10 text-white px-4 sm:px-8 md:px-12 flex flex-col justify-center h-full">
//                     <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
//                         Turn Your Ideas into Reality
//                     </h1>
//                     <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-md">
//                         Start for free and get attractive offers from the community
//                     </p>
//                 </div>
//             </div>

//             {/* Right Side Login Form */}
//             <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
//                 <div className="w-full max-w-md px-4 sm:px-8 py-8 sm:py-12">
//                     <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
//                         Register Page
//                     </h2>
//                     <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base">
//                         Welcome Back! Please enter your details.
//                     </p>

//                     <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
//                         <div>
//                             <input
//                                 type="text"
//                                 name="FullName"
//                                 className={`w-full px-3 py-2 border rounded-md ${errors.FullName ? "border-red-500 placeholder-red-400" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.FullName}
//                                 placeholder={errors.FullName ? errors.FullName : "Full Name"}
//                             />
//                         </div>

//                         <div>
//                             <input
//                                 type="number"
//                                 name="Phone_Number"
//                                 className={`w-full px-3 py-2 border rounded-md ${errors.Phone_Number ? "border-red-500 placeholder-red-400" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.Phone_Number}
//                                 placeholder={errors.Phone_Number ? errors.Phone_Number : "Phone Number"}
//                             />
//                         </div>

//                         <div>
//                             <input
//                                 type="email"
//                                 name="Email"
//                                 className={`w-full px-3 py-2 border rounded-md ${errors.Email ? "border-red-500 placeholder-red-400" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.Email}
//                                 placeholder={errors.Email ? errors.Email : "Email"}
//                             />
//                         </div>

//                         <div>
//                             <input
//                                 type="password"
//                                 name="Password"
//                                 className={`w-full px-3 py-2 border rounded-md ${errors.Password ? "border-red-500 placeholder-red-400" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.Password}
//                                 placeholder={errors.Password ? errors.Password : "Confirm Password"}
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 type="password"
//                                 name="ConfirmPassword"
//                                 className={`w-full px-3 py-2 border rounded-md ${errors.ConfirmPassword ? "border-red-500 placeholder-red-400" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.ConfirmPassword}
//                                 placeholder={errors.ConfirmPassword ? errors.ConfirmPassword : "Confirm Password"}
//                             />
//                         </div>

//                         {/* Login Button */}
//                         {/* <Link to={""}>
//                             <button
//                                 type="submit"
//                                 className="w-full py-2 mt-5 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
//                             >
//                                 Register
//                             </button>
//                         </Link> */}
//                         <button
//                             type="submit"
//                             className="w-full py-2 mt-5 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
//                         >
//                             Sign Up
//                         </button>

//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;


// import React, { useState } from "react";
// import Background from "../assets/bg-1.jpg";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import { handleError, handleSuccess } from "../Utils";
// // import { application } from 'express';

// const Signup = () => {
//     const [signUPInfo, setSignUpInfo] = useState({
//         FullName: "",
//         Email: "",
//         Phone_Number: "",
//         Password: "",
//         ConfirmPassword: "",
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         console.log(name, value);
//         setSignUpInfo((prevData) => ({
//             ...prevData,
//             [name]: value,
//         }));
//     };
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const { FullName, Email, Phone_Number, Password, ConfirmPassword } = signUPInfo;

//         if (!FullName || !Email || !Phone_Number || !Password || !ConfirmPassword) {
//             return handleError("Please fill all fields!");
//         }

//         if (Password !== ConfirmPassword) {
//             return handleError("Passwords do not match!");
//         }

//         try {
//             const url = "http://localhost:8000/api/user/register";
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(signUPInfo),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 handleSuccess("Registered successfully...");
//             } else {
//                 handleError(result.message || "Registration failed");
//             }
//         } catch (error) {
//             handleError("Server error, please try again later");
//         }
//     };


//     // const handleSubmit = async (e) => {
//     //     e.preventDefault();
//     //     const { FullName, Email, Phone_Number, Password, ConfirmPassword } =
//     //         signUPInfo;
//     //     if (!FullName || !Email || !Phone_Number || !Password || !ConfirmPassword) {
//     //         return "Please fill All the field!";
//     //     }
//     //     try {
//     //         const url = "http://localhost:8000/api/user/register";
//     //         const response = await fetch(url, {
//     //             method: "POST",
//     //             headers: {
//     //                 "content-type": "application/json",
//     //             },
//     //             body: JSON.stringify(signUPInfo),
//     //         });
//     //         const result = await response.json();
//     //         if (result.status === 200) {
//     //             return handleSuccess('Rigister succefully...')
//     //         }
//     //     } catch (error) {
//     //         return handleError('All Feilds must be Require')
//     //     }
//     // };

//     return (
//         <div className="min-h-screen flex flex-col lg:flex-row">
//             {/* Left Side Image with Text */}
//             <div className="relative w-full lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-auto">
//                 <img
//                     src={Background}
//                     alt="Interior"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 {/* gradient overlay for readability, very light */}
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

//                 <div className="relative z-10 text-white px-4 sm:px-8 md:px-12 flex flex-col justify-center h-full">
//                     <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
//                         Turn Your Ideas into Reality
//                     </h1>
//                     <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-md">
//                         Start for free and get attractive offers from the community
//                     </p>
//                 </div>
//             </div>

//             {/* Right Side Login Form */}
//             <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
//                 <div className="w-full max-w-md px-4 sm:px-8 py-8 sm:py-12">
//                     <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
//                         Register Page
//                     </h2>
//                     <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base">
//                         Welcome Back! Please enter your details.
//                     </p>

//                     <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
//                         <div>
//                             <input
//                                 type="text"
//                                 placeholder="Full Name"
//                                 name="FullName"
//                                 className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
//                                 onChange={handleChange}
//                                 value={signUPInfo.FullName}
//                             />
//                         </div>

//                         <div>
//                             <input
//                                 type="number"
//                                 placeholder="Phone Number"
//                                 name="Phone_Number"
//                                 className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
//                                 onChange={handleChange}
//                                 value={signUPInfo.Phone_Number}
//                             />
//                         </div>

//                         <div>
//                             <input
//                                 type="email"
//                                 placeholder="Email"
//                                 name="Email"
//                                 className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
//                                 onChange={handleChange}
//                                 value={signUPInfo.Email}
//                             />
//                         </div>

//                         <div>
//                             <input
//                                 type="password"
//                                 placeholder="Password"
//                                 name="Password"
//                                 className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
//                                 onChange={handleChange}
//                                 value={signUPInfo.Password}
//                             />
//                         </div>
//                         <div>
//                             <input
//                                 type="password"
//                                 placeholder="Confirm Password"
//                                 name="ConfirmPassword"
//                                 className="w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-black"
//                                 onChange={handleChange}
//                                 value={signUPInfo.ConfirmPassword}
//                             />
//                         </div>

//                         {/* Login Button */}
//                         {/* <Link to={""}> */}
//                         <button
//                             type="submit"
//                             className="w-full py-2 mt-5 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
//                         >
//                             Register
//                         </button>
//                         {/* </Link> */}
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;

// import React, { useState } from "react";
// import Background from "../assets/bg-1.jpg";
// import { AiOutlineExclamationCircle } from "react-icons/ai";
// import { handleError, handleSuccess } from "../Utils";
// import { useNavigate } from "react-router-dom"; // ✅ import navigate

// const Signup = () => {
//     const [signUPInfo, setSignUpInfo] = useState({
//         FullName: "",
//         Email: "",
//         Phone_Number: "",
//         Password: "",
//         ConfirmPassword: "",
//     });

//     const [errors, setErrors] = useState({});
//     const navigate = useNavigate(); // ✅ initialize navigate

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setSignUpInfo((prev) => ({ ...prev, [name]: value }));
//         setErrors((prev) => ({ ...prev, [name]: "" })); // clear error while typing
//     };

//     const validate = () => {
//         let newErrors = {};
//         const { FullName, Email, Phone_Number, Password, ConfirmPassword } = signUPInfo;

//         if (!FullName || FullName.length < 3)
//             newErrors.FullName = "Min 3 characters required";

//         if (!Phone_Number || !/^\d{10}$/.test(Phone_Number))
//             newErrors.Phone_Number = "Phone must be 10 digits";

//         if (!Email || Email !== Email.toLowerCase())
//             newErrors.Email = "Email must be lowercase";

//         if (!Password || Password.length < 6 || Password.length > 10)
//             newErrors.Password = "Password 6-10 characters";

//         if (!ConfirmPassword || ConfirmPassword !== Password)
//             newErrors.ConfirmPassword = "Passwords do not match";

//         setErrors(newErrors);
//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validate()) {
//             return handleError("Please fix the errors in form");
//         }

//         try {
//             const url = "http://localhost:8000/api/user/register";
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(signUPInfo),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 handleSuccess("Registered successfully...");
//                 navigate("/signin"); // ✅ redirect to signin page
//             } else {
//                 handleError(result.message || "Registration failed");
//             }
//         } catch (error) {
//             handleError("Server error, please try again later");
//         }
//     };

//     // helper to render input with error
//     const renderInput = (type, name, placeholder) => (
//         <div className="relative">
//             <input
//                 type={type}
//                 name={name}
//                 value={signUPInfo[name]}
//                 onChange={handleChange}
//                 placeholder={errors[name] ? errors[name] : placeholder}
//                 className={`w-full px-3 sm:px-4 py-2 sm:py-3 border rounded-md text-sm sm:text-base focus:outline-none pr-8
//           ${errors[name] ? "border-red-500 placeholder-red-500" : "border-gray-300"}`}
//             />
//             {errors[name] && (
//                 <AiOutlineExclamationCircle
//                     className="absolute right-2 top-1/2 -translate-y-1/2 text-red-500"
//                     size={20}
//                 />
//             )}
//         </div>
//     );

//     return (
//         <div className="min-h-screen flex flex-col lg:flex-row">
//             {/* Left Side Image with Text */}
//             <div className="relative w-full lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-auto">
//                 <img
//                     src={Background}
//                     alt="Interior"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
//                 <div className="relative z-10 text-white px-4 sm:px-8 md:px-12 flex flex-col justify-center h-full">
//                     <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
//                         Turn Your Ideas into Reality
//                     </h1>
//                     <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-md">
//                         Start for free and get attractive offers from the community
//                     </p>
//                 </div>
//             </div>

//             {/* Right Side Form */}
//             <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
//                 <div className="w-full max-w-md px-4 sm:px-8 py-8 sm:py-12">
//                     <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
//                         Sign Up Page
//                     </h2>
//                     <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base">
//                         Welcome Back! Please enter your details.
//                     </p>

//                     <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
//                         {renderInput("text", "FullName", "Full Name")}
//                         {renderInput("number", "Phone_Number", "Phone Number")}
//                         {renderInput("email", "Email", "Email")}
//                         {renderInput("password", "Password", "Password")}
//                         {renderInput("password", "ConfirmPassword", "Confirm Password")}

//                         <button
//                             type="submit"
//                             className="w-full py-2 mt-5 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
//                         >
//                             Sign Up
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;

// import React, { useState } from "react";
// import Background from "../assets/bg-1.jpg";
// import { useNavigate } from "react-router-dom";
// import { handleError, handleSuccess } from "../Utils";
// import { AiOutlineExclamationCircle } from "react-icons/ai";

// const Signup = () => {
//     const navigate = useNavigate();

//     const [signUPInfo, setSignUpInfo] = useState({
//         FullName: "",
//         Email: "",
//         Phone_Number: "",
//         Password: "",
//         ConfirmPassword: "",
//     });

//     const [errors, setErrors] = useState({});

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === "Phone_Number") {
//             // Remove non-numeric characters
//             const numericValue = value.replace(/\D/g, "");
//             // Limit to 10 digits
//             if (numericValue.length <= 10) {
//                 setSignUpInfo((prevData) => ({
//                     ...prevData,
//                     [name]: numericValue,
//                 }));
//             }
//         } else {
//             setSignUpInfo((prevData) => ({
//                 ...prevData,
//                 [name]: value,
//             }));
//         }

//         setErrors((prev) => ({
//             ...prev,
//             [name]: "",
//         }));
//     };

//     const validate = () => {
//         let newErrors = {};

//         if (!signUPInfo.FullName) {
//             newErrors.FullName = "Full Name is required";
//         } else if (signUPInfo.FullName.length < 3) {
//             newErrors.FullName = "Full Name must be at least 3 characters";
//         }

//         if (!signUPInfo.Phone_Number) {
//             newErrors.Phone_Number = "Phone number is required";
//         } else if (!/^\d{10}$/.test(signUPInfo.Phone_Number)) {
//             newErrors.Phone_Number = "Phone number must be 10 digits";
//         }

//         if (!signUPInfo.Email) {
//             newErrors.Email = "Email is required";
//         } else if (!/\S+@\S+\.\S+/.test(signUPInfo.Email)) {
//             newErrors.Email = "Enter a valid email";
//         }

//         if (!signUPInfo.Password) {
//             newErrors.Password = "Password is required";
//         } else if (signUPInfo.Password.length < 6) {
//             newErrors.Password = "Password must be at least 6 characters";
//         }

//         if (!signUPInfo.ConfirmPassword) {
//             newErrors.ConfirmPassword = "Confirm Password is required";
//         } else if (signUPInfo.Password !== signUPInfo.ConfirmPassword) {
//             newErrors.ConfirmPassword = "Passwords do not match";
//         }

//         setErrors(newErrors);

//         // Show toast if all fields are missing
//         if (Object.keys(newErrors).length > 0) {
//             if (
//                 !signUPInfo.FullName ||
//                 !signUPInfo.Email ||
//                 !signUPInfo.Phone_Number ||
//                 !signUPInfo.Password ||
//                 !signUPInfo.ConfirmPassword
//             ) {
//                 handleError("Please fill all the fields");
//             } else {
//                 handleError("Please correct the highlighted errors");
//             }
//         }

//         return Object.keys(newErrors).length === 0;
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!validate()) return;

//         try {
//             const url = "http://localhost:8000/api/user/register";
//             const response = await fetch(url, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify(signUPInfo),
//             });

//             const result = await response.json();

//             if (response.ok) {
//                 handleSuccess("Registered successfully...");
//                 navigate("/signin");
//             } else {
//                 handleError(result.message || "Registration failed");
//             }
//         } catch (error) {
//             handleError("Server error, please try again later");
//         }
//     };

//     return (
//         <div className="min-h-screen flex flex-col lg:flex-row">
//             {/* Left Side */}
//             <div className="relative w-full lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-auto">
//                 <img
//                     src={Background}
//                     alt="Interior"
//                     className="absolute inset-0 w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>

//                 <div className="relative z-10 text-white px-4 sm:px-8 md:px-12 flex flex-col justify-center h-full">
//                     <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
//                         Turn Your Ideas into Reality
//                     </h1>
//                     <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-md">
//                         Start for free and get attractive offers from the community
//                     </p>
//                 </div>
//             </div>

//             {/* Right Side Form */}
//             <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
//                 <div className="w-full max-w-md px-4 sm:px-8 py-8 sm:py-12">
//                     <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
//                         Sign Up Page
//                     </h2>
//                     <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base">
//                         Welcome! Please enter your details.
//                     </p>
//                     <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
//                         <div className="relative">
//                             <input
//                                 type="text"
//                                 name="FullName"
//                                 className={`w-full px-3 py-2 border rounded-md pr-10 ${errors.FullName ? "border-red-500" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.FullName}
//                                 placeholder="Full Name"
//                             />
//                             {/* {errors.FullName && (
//                                 <AiOutlineExclamationCircle
//                                     className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none"
//                                     size={18}
//                                 />
//                             )} */}
//                             <p className="text-red-500 text-xs">{errors.FullName}</p>
//                         </div>



//                         <div>
//                             <input
//                                 type="email"
//                                 name="Email"
//                                 className={`w-full px-3 py-2 border rounded-md ${errors.Email ? "border-red-500" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.Email}
//                                 placeholder="Email"
//                             />
//                             {errors.Email && (
//                                 <p className="text-red-500 text-xs">{errors.Email}</p>
//                             )}
//                         </div>
//                         <div>
//                             <input
//                                 type="text"
//                                 name="Phone_Number"
//                                 className={`w-full px-3 py-2 border rounded-md ${errors.Phone_Number ? "border-red-500" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.Phone_Number}
//                                 placeholder="Phone Number"
//                             />
//                             {errors.Phone_Number && (
//                                 <p className="text-red-500 text-xs">{errors.Phone_Number}</p>
//                             )}
//                         </div>
//                         <div>
//                             <input
//                                 type="password"
//                                 name="Password"
//                                 className={`w-full px-3 py-2 border rounded-md ${errors.Password ? "border-red-500" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.Password}
//                                 placeholder="Password"
//                             />
//                             {errors.Password && (
//                                 <p className="text-red-500 text-xs">{errors.Password}</p>
//                             )}
//                         </div>
//                         <div>
//                             <input
//                                 type="password"
//                                 name="ConfirmPassword"
//                                 className={`w-full px-3 py-2 border rounded-md ${errors.ConfirmPassword ? "border-red-500" : ""
//                                     }`}
//                                 onChange={handleChange}
//                                 value={signUPInfo.ConfirmPassword}
//                                 placeholder="Confirm Password"
//                             />
//                             {errors.ConfirmPassword && (
//                                 <p className="text-red-500 text-xs">{errors.ConfirmPassword}</p>
//                             )}
//                         </div>
//                         <button
//                             type="submit"
//                             className="w-full py-2 mt-5 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
//                         >
//                             Sign Up
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Signup;


