import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function FreeTrial() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("⚠️ Please fill all required fields");
      return;
    }
    setError("");
    alert(`✅ Free Trial account created!`);
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen py-16 bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>

      <div className="relative flex flex-col items-center justify-center w-full gap-12 px-6 mx-auto max-w-7xl lg:flex-row lg:justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 max-w-xl space-y-6 text-center lg:text-left"
        >
          <h1 className="text-5xl font-extrabold leading-snug tracking-tight text-gray-800 md:text-6xl">
            Start Your <span className="text-blue-600">Free Trial</span> Today
          </h1>
          <p className="text-lg text-gray-600">
            Unlock all premium features for{" "}
            <span className="font-semibold">14 days</span> with no credit card
            required. Experience the future of construction management with us.
          </p>

          <div className="flex flex-col items-center gap-4 mt-8 sm:flex-row lg:justify-start">
            <Link
              to="/Login"
              className="px-8 py-3 text-lg font-semibold text-center text-white transition shadow-lg rounded-xl bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-500 hover:to-blue-500"
            >
              Login
            </Link>

            <Link
              to="/"
              className="px-8 py-3 text-lg font-semibold text-center text-blue-600 transition bg-white border shadow rounded-xl hover:bg-indigo-50"
            >
              Learn More
            </Link>
          </div>
        </motion.div>

        <motion.div
          id="free-trial-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10 w-full max-w-md p-8 bg-white shadow-2xl rounded-3xl lg:mt-15"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
            Create Your Account
          </h2>

          {error && <p className="mb-4 text-center text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
              />
            </div>

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

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
              <div>
                <label className="block mb-1 text-sm font-medium text-gray-700">
                  Company / Organization
                </label>
                <input
                  type="text"
                  placeholder="Company name (optional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none"
                />
              </div>
            </div>


            <button
              type="submit"
              className="w-full py-3 font-semibold text-white transition rounded-lg shadow bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-500 hover:to-blue-500"
            >
              Start Free Trial
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-500">
            No credit card required • Cancel anytime
          </p>
        </motion.div>
      </div>
    </div>
  );
}
