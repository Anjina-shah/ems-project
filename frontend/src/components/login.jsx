import React, { useState } from "react";
//import axios from "axios";
// import { useNavigate } from "react-router-dom";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="p-6 rounded-lg w-1/4 bg-white shadow-md">
        {error && <div className="text-red-500">{error}</div>}
        <h2 className="text-2xl font-bold mb-6">Login Page</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              <strong>Email:</strong>
            </label>
            <input
              type="email"
              name="email"
              autoComplete="off"
              placeholder="Enter Email"
              onChange={(e) => setValues({ ...values, email: e.target.value })}
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              <strong>Password:</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600 mb-4">
            Log in
          </button>
          <div className="flex items-center">
            <input type="checkbox" name="tick" id="tick" className="mr-2" />
            <label htmlFor="tick" className="text-gray-700">
              You agree with terms & conditions
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Login;
