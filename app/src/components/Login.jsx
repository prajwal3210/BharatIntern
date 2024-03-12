import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/Login", formData)
      .then((res) => {
        console.log(res.data);
        //navigate("/Login");
      })
      .catch((err) => {
        console.log(err);
        // Handle login failure
      });
  };

  return (
    <>
      <div className=" flex flex-col justify-center items-center h-screen  w-full">
        <form
          onSubmit={handleSubmit}
          className=" bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className=" font-bold text-center py-3">Login Page</h1>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2 py-2">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your Password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="flex justify-center py-5">
            <button className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded-full">
              Log In
            </button>
          </div>
          <Link to="/" className=" font-bold text-center  px-3">
            <p className="px-4 py-3">
              <u>⬅Back to Registration</u>
            </p>
          </Link>
        </form>
      </div>
    </>
  );
}
