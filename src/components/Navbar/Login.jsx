import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("⚠️ Please enter both email and password");
      return;
    }
    setError("");
    alert("✅ Logged in successfully! (Integration pending)");
    navigate("/dashboard"); 
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>

      <div className="relative flex flex-col items-center justify-center w-full px-6 mx-auto max-w-7xl lg:flex-row lg:justify-between">
        
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-xl text-center lg:text-left"
        >
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 md:text-6xl">
            Welcome <span className="text-blue-700">Back</span>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Login to manage your construction projects, track progress, and
            collaborate with your team — all in one place.
          </p>

          <div className="flex flex-col items-center gap-4 mt-6 sm:flex-row lg:justify-start">
            <Link
              to="/freetrial"
              className="px-8 py-3 text-lg font-semibold text-center text-white transition shadow-lg rounded-xl bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-500"
            >
              Start Free Trial
            </Link>

            <Link
              to="/Register"
              className="px-8 py-3 text-lg font-semibold text-center text-blue-700 transition bg-white border shadow rounded-xl hover:bg-indigo-50"
            >
             Register
            </Link>
          </div>
        </motion.div>

        <motion.div
          id="login-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full max-w-md p-8 mt-10 bg-white shadow-2xl rounded-3xl lg:mt-0"
        >
          <h2 className="mb-6 text-3xl font-bold text-center text-gray-800">
            Login to Your Account
          </h2>

          {error && <p className="mb-4 text-center text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition rounded-lg shadow bg-gradient-to-r from-blue-700 to-indigo-700 hover:from-blue-500 hover:to-indigo-500"
            >
              Login
            </button>
          </form>

        
        </motion.div>
      </div>
    </div>
  );
}
