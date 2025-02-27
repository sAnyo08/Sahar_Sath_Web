import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';

function LoginNgo() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginusers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    });
    const json = await response.json();

    if (json.success) {
      sessionStorage.setItem("token", json.token);
      navigate("/homeNgo"); // Navigate to the home page after successful login
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      {/* Background Styling */}

      <div className="absolute inset-0 bg-gray-200 -z-10 h-full w-full">
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
      </div>

      {/* Login Form */}
      <div className="relative z-10 w-full max-w-md bg-white shadow-lg rounded-lg px-8 py-10">
        <h2 className="text-center text-2xl font-semibold text-blue-900 mb-8">
          NGO Portal Login
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="block text-md font-medium text-blue-900">
              User ID
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={credentials.email}
                onChange={onChange}
                autoComplete="email"
                required
                className="block w-full border-2 border-blue-200 rounded-md py-2 px-3 text-blue-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="password" className="block text-md font-medium text-blue-900">
              Password
            </label>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={credentials.password}
                onChange={onChange}
                autoComplete="current-password"
                required
                className="block w-full border-2 border-blue-200 rounded-md py-2 px-3 text-blue-800 placeholder-gray-500 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-700 text-white font-semibold rounded-md py-2 shadow-sm hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
            >
              Login
            </button>
          </div>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          For assistance, contact <span className="text-blue-800 font-semibold">helpdesk@govportal.gov</span>
        </p>
      </div>
    </div>
  );
}

export default LoginNgo;
