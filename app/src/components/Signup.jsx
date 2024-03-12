import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    termsChecked: false,
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (
      !formData.username ||
      !formData.email ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setErrorMessage("All fields are required");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    if (!formData.termsChecked) {
      setErrorMessage("Please accept terms and conditions");
      return;
    }

    // Simulate signup success
    setErrorMessage("");
    setSuccessMessage("Signup successful!");
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      termsChecked: false,
    });
    axios
      .post("http://localhost:3001/", formData)
      .then((res) => {
        console.log(res.data);
        navigate("/Login");
      })
      .catch((err) => {
        // Handle error response from server
        console.log(err);
        setErrorMessage("An error occurred while signing up");
      });
  };

  return (
    <div className=" flex flex-col justify-center items-center h-screen  w-full ">
      <h2 className=" font-bold text-center py-3">Sign Up</h2>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form
        className=" bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Username:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            name="username"
            placeholder="Enter Your Username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Email:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="email"
            placeholder="Enter Your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="password"
            placeholder="Enter Your Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Confirm Password:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="password"
            name="confirmPassword"
            placeholder="Re-enter Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <div className=" px-3 py-3">
          <input
            type="checkbox"
            name="termsChecked"
            checked={formData.termsChecked}
            onChange={handleChange}
          />
          <label className=" text-gray-900 text-sm font-bold">
            Accept terms and conditions
          </label>
        </div>
        <div className=" flex align-middle justify-center text-gray-700 text-sm font-bold">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 hover:text-gray-900 text-gray-700 font-bold py-2 px-4 rounded-full"
          >
            Sign Up
          </button>
        </div>

        <div className="grid py-2 px-2  text-gray-700 text-sm font-bold m-3">
          <p>Already have an Account?</p>
          <Link to="/Login">
            <u className=" font-semibold text-sky-950 justify-center align-middle m-3">
              Log In
            </u>
          </Link>
        </div>
      </form>
    </div>
  );
}
