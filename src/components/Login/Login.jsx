import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ closePopup, setIsLoggedIn }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
      const user = registeredUsers.find(
        (user) =>
          user.email === formData.email && user.password === formData.password
      );

      if (user) {
        toast.success("Successfully Logged In!", {
          position: "top-right",
          autoClose: 3000,  
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setIsLoggedIn(true);
        setTimeout(() => {
          closePopup();
        }, 2000);
      } else {
        toast.error("Invalid email or password.", {
          position: "top-right",
          autoClose: 3000,
        });
      }
    } else {
      const registeredUsers = JSON.parse(localStorage.getItem("users")) || [];
      const userExists = registeredUsers.some(
        (user) => user.email === formData.email
      );

      if (userExists) {
        toast.error("User already exists. Please log in.", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        const newUser = {
          name: formData.name,
          email: formData.email,
          password: formData.password,
        };

        registeredUsers.push(newUser);
        localStorage.setItem("users", JSON.stringify(registeredUsers));
        toast.success("Signup Successful! Please log in.", {
          position: "top-right",
          autoClose: 2000,
        });
        setIsLogin(true);
      }
    }
  };

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div className="relative bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6 w-11/12 max-w-md">
          <div className="flex justify-between mb-4 border-b">
            <button
              className={`w-1/2 py-2 ${
                isLogin ? "bg-blue-600 text-black font-bold " : "text-black font-bold bg-gray-200"
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`w-1/2 py-2 ${
                !isLogin ? "bg-blue-600 text-black font-bold" : "text-black font-bold bg-gray-200"
              }`}
              onClick={() => setIsLogin(false)}
            >
              Signup
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <h2 className="text-xl font-bold text-center mb-4">
              {isLogin ? "Login" : "Signup"}
            </h2>
            {!isLogin && (
              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                  required
                />
              </div>
            )}
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border rounded-md dark:bg-gray-700 dark:border-gray-600 dark:text-gray-300"
                required
              />
            </div>
            {isLogin && (
              <p className="text-right text-blue-500 text-sm mb-4 cursor-pointer">
                Forgot password?
              </p>
            )}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
            >
              {isLogin ? "Login" : "Signup"}
            </button>
          </form>
          <p className="text-center text-sm mt-4 ">
            {isLogin ? "Not a member? " : "Already have an account? "}
            <span
              className="text-blue-500 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? "Signup now" : "Login here"}
            </span>
          </p>
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 text-gray-700 dark:text-gray-300 text-2xl font-bold p-2"
          >
            &times;
          </button>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
