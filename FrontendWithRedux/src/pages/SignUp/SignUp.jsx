import React, { useState } from "react";
import { images } from "../../assets/images";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignupAction } from "../../_actions";
import { validateSignUpForm, registerUser } from "./Utils/Utils";

const SignUp = () => {
  const navigate = useNavigate();

  const [signUPInfo, setSignUpInfo] = useState({
    FullName: "",
    Email: "",
    Phone_Number: "",
    Password: "",
    ConfirmPassword: "",
  });
  const dispatch = useDispatch();

  const [errors, setErrors] = useState({});

  // const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "Phone_Number") {
      const numericValue = value.replace(/\D/g, "").slice(0, 10);
      setSignUpInfo((prevData) => ({
        ...prevData,
        [name]: numericValue,
      }));
    } else {
      setSignUpInfo((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // const handleSubmit = async (e) => {
  //     e.preventDefault();

  //     const newErrors = validateSignUpForm(signUPInfo);
  //     setErrors(newErrors);

  //     if (Object.keys(newErrors).length > 0) {
  //         handleError("Please correct the highlighted errors");
  //         return;
  //     }

  //     await registerUser(signUPInfo, navigate);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Submitting signUPInfo:", signUPInfo);
  //   dispatch(SignupAction.SignUpAction(signUPInfo));
  //   setSignUpInfo({
  //     FullName: "",
  //     Email: "",
  //     Phone_Number: "",
  //     Password: "",
  //     ConfirmPassword: "",
  //   });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateSignUpForm(signUPInfo);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      handleError("Please correct the highlighted errors");
      return;
    }

    await registerUser(signUPInfo, navigate);
  };

  return (
    // <div className="min-h-screen flex flex-col lg:flex-row">
    //   <div className="relative w-full lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-auto">
    //     <img
    //       src={images.Logo1}
    //       alt="Interior"
    //       className="absolute inset-0 w-full h-full object-cover"
    //     />
    //     <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
    //     <div className="relative z-10 text-white px-4 sm:px-8 md:px-12 flex flex-col justify-center h-full">
    //       <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
    //         Turn Your Ideas into Reality
    //       </h1>
    //       <p className="text-xs sm:text-sm md:text-base lg:text-lg max-w-md">
    //         Start for free and get attractive offers from the community
    //       </p>
    //     </div>
    //   </div>

    //   <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
    //     <div className="w-full max-w-md px-4 sm:px-8 py-8 sm:py-12">
    //       <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
    //         Sign Up Page
    //       </h2>
    //       <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base">
    //         Welcome! Please enter your details.
    //       </p>
    //       <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
    //         <div>
    //           <input
    //             type="text"
    //             name="FullName"
    //             className={`w-full px-3 py-2 border rounded-md`}
    //             onChange={handleChange}
    //             value={signUPInfo.FullName}
    //             placeholder="Full Name"
    //           />
    //           {/* {errors.FullName && (
    //                             <p className="text-red-500 text-xs">{errors.FullName}</p>
    //                         )} */}
    //         </div>
    //         <div>
    //           <input
    //             type="email"
    //             name="Email"
    //             className={`w-full px-3 py-2 border rounded-md`}
    //             onChange={handleChange}
    //             value={signUPInfo.Email}
    //             placeholder="Email"
    //           />
    //           {/* {errors.Email && (
    //                             <p className="text-red-500 text-xs">{errors.Email}</p>
    //                         )} */}
    //         </div>
    //         <div>
    //           <input
    //             type="text"
    //             name="Phone_Number"
    //             className={`w-full px-3 py-2 border rounded-md`}
    //             onChange={handleChange}
    //             value={signUPInfo.Phone_Number}
    //             placeholder="Phone Number"
    //           />
    //           {/* {errors.Phone_Number && (
    //                             <p className="text-red-500 text-xs">{errors.Phone_Number}</p>
    //                         )} */}
    //         </div>
    //         <div>
    //           <input
    //             type="password"
    //             name="Password"
    //             className={`w-full px-3 py-2 border rounded-md`}
    //             onChange={handleChange}
    //             value={signUPInfo.Password}
    //             placeholder="Password"
    //           />
    //           {/* {errors.Password && (
    //                             <p className="text-red-500 text-xs">{errors.Password}</p>
    //                         )} */}
    //         </div>
    //         <div>
    //           <input
    //             type="password"
    //             name="ConfirmPassword"
    //             className={`w-full px-3 py-2 border rounded-md`}
    //             onChange={handleChange}
    //             value={signUPInfo.ConfirmPassword}
    //             placeholder="Confirm Password"
    //           />
    //           {/* {errors.ConfirmPassword && (
    //                             <p className="text-red-500 text-xs">{errors.ConfirmPassword}</p>
    //                         )} */}
    //         </div>
    //         <button
    //           type="submit"
    //           className="w-full py-2 mt-5 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
    //         >
    //           Sign Up
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </div>
    <div className="min-h-screen flex flex-col lg:flex-row">
      <div className="relative w-full lg:w-1/2 h-56 sm:h-72 md:h-96 lg:h-auto">
        <img
          src={images.Logo1}
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

      <div className="flex w-full lg:w-1/2 justify-center items-center bg-white">
        <div className="w-full max-w-md px-4 sm:px-8 py-8 sm:py-12">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
            Sign Up Page
          </h2>
          <p className="text-gray-600 mb-6 text-xs sm:text-sm md:text-base">
            Welcome! Please enter your details.
          </p>
          <form className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="FullName"
                className={`w-full px-3 py-2 border rounded-md ${errors.FullName ? "border-red-500" : ""}`}
                onChange={handleChange}
                value={signUPInfo.FullName}
                placeholder="Full Name"
              />
              {errors.FullName && (
                <p className="text-red-500 text-xs">{errors.FullName}</p>
              )}
            </div>
            <div>
              <input
                type="email"
                name="Email"
                className={`w-full px-3 py-2 border rounded-md ${errors.Email ? "border-red-500" : ""}`}
                onChange={handleChange}
                value={signUPInfo.Email}
                placeholder="Email"
              />
              {errors.Email && (
                <p className="text-red-500 text-xs">{errors.Email}</p>
              )}
            </div>
            <div>
              <input
                type="text"
                name="Phone_Number"
                className={`w-full px-3 py-2 border rounded-md ${errors.Phone_Number ? "border-red-500" : ""}`}
                onChange={handleChange}
                value={signUPInfo.Phone_Number}
                placeholder="Phone Number"
              />
              {errors.Phone_Number && (
                <p className="text-red-500 text-xs">{errors.Phone_Number}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="Password"
                className={`w-full px-3 py-2 border rounded-md ${errors.Password ? "border-red-500" : ""}`}
                onChange={handleChange}
                value={signUPInfo.Password}
                placeholder="Password"
              />
              {errors.Password && (
                <p className="text-red-500 text-xs">{errors.Password}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="ConfirmPassword"
                className={`w-full px-3 py-2 border rounded-md ${errors.ConfirmPassword ? "border-red-500" : ""}`}
                onChange={handleChange}
                value={signUPInfo.ConfirmPassword}
                placeholder="Confirm Password"
              />
              {errors.ConfirmPassword && (
                <p className="text-red-500 text-xs">{errors.ConfirmPassword}</p>
              )}
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-5 sm:py-3 bg-black text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
