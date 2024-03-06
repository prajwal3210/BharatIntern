import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center h-screen  w-full">
        <form className=" bg-slate-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className=" font-bold text-center py-3">Login Page</h1>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter Your Name"
              type="Name"
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
            />
          </div>
          <div className="flex justify-center px-1 py-1">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Log In
            </button>
          </div>
          <Link to="/Signup" className=" font-bold text-center  px-3">
            <p className="px-4 py-3">
              <u>⬅Back to Registration</u>
            </p>
          </Link>
        </form>
      </div>
    </>
  );
}
