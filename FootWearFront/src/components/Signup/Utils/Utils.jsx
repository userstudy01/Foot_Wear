export const validateSignUpForm = (formData) => {
    const newErrors = {};

    if (!formData.FullName) {
        newErrors.FullName = "Full Name is required";
    } else if (formData.FullName.length < 3) {
        newErrors.FullName = "Full Name must be at least 3 characters";
    }

    if (!formData.Email) {
        newErrors.Email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.Email)) {
        newErrors.Email = "Enter a valid email";
    }

    if (!formData.Phone_Number) {
        newErrors.Phone_Number = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.Phone_Number)) {
        newErrors.Phone_Number = "Phone number must be 10 digits";
    }

    if (!formData.Password) {
        newErrors.Password = "Password is required";
    } else if (formData.Password.length < 6) {
        newErrors.Password = "Password must be at least 6 characters";
    }

    if (!formData.ConfirmPassword) {
        newErrors.ConfirmPassword = "Confirm Password is required";
    } else if (formData.Password !== formData.ConfirmPassword) {
        newErrors.ConfirmPassword = "Passwords do not match";
    }

    return newErrors;
};

export const registerUser = async (signUpInfo, navigate) => {
    try {
        const url = "http://localhost:8000/api/user/register";
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(signUpInfo),
        });

        const result = await response.json();

        if (response.ok) {
            handleSuccess("Registered successfully...");
            navigate("/signin");
        } else {
            handleError(result.message || "Registration failed");
        }
    } catch (error) {
        handleError("Server error, please try again later");
    }
};