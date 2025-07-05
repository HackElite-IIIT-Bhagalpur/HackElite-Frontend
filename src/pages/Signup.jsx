// src/pages/Signup.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-blue-800 via-gray-900 to-black text-white">
      {/* Sign Up Section */}
      <div className="md:w-1/2 p-10">
        <form className="bg-white text-black p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Create an account</h2>
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-4 px-4 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="First name"
            className="w-full mb-6 px-4 py-2 border rounded"
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
            Sign me up
          </button>

          <div className="flex justify-between mt-4 text-sm">
            <Link to="/signin" className="hover:underline">
              Sign in
            </Link>
            <Link to="#" className="hover:underline">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>

      {/* Right side (Illustration or Info) */}
      
    </div>
  );
}
