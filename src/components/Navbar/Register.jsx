import React, { useState } from "react";
import { User, Mail, Lock, Eye, EyeOff, Phone, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setError("⚠️ Please fill in all required fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("❌ Passwords do not match");
      return;
    }
    setError("");
    alert("✅ Registration successful! (Integration pending)");
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen px-6 bg-gradient-to-r from-indigo-50 via-white to-indigo-100">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="relative grid items-center w-full max-w-6xl grid-cols-1 gap-12 md:grid-cols-2">

        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-5xl font-extrabold leading-snug text-gray-800">
            Join <span className="text-blue-600">Us Today!</span>
          </h1>
          <p className="mb-6 text-lg text-gray-600">
            Create an account and unlock{" "}
            <span className="font-semibold text-blue-600">
              powerful construction tools
            </span>{" "}
            built to make your projects smarter and faster.
          </p>

          <div className="flex space-x-4">
            <Link
              to="/Login"
              className="px-6 py-3 font-semibold text-white transition shadow-lg rounded-xl bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-500 hover:to-blue-500"
            >
              Login
            </Link>
            <Link
              to="/Freetrial"
              className="px-6 py-3 font-semibold text-blue-600 transition bg-white border shadow rounded-xl hover:bg-indigo-50"
            >
              Free Trial
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="p-8 bg-white shadow-2xl mt-15 rounded-3xl"
        >
          <h2 className="mb-6 text-2xl font-bold text-center text-gray-800">
            Register
          </h2>

          {error && <p className="mb-4 text-center text-red-500">{error}</p>}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="flex items-center px-3 py-3 border rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <User size={18} className="mr-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>

            <div className="col-span-2">
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="flex items-center px-3 py-3 border rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <Mail size={18} className="mr-2 text-gray-400" />
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>


            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone
              </label>
              <div className="flex items-center px-3 py-3 border rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <Phone size={18} className="mr-2 text-gray-400" />
                <input
                  type="tel"
                  placeholder="+91 9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Company / Organization
              </label>
              <div className="flex items-center px-3 py-3 border rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <Building2 size={18} className="mr-2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Optional"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>


            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="flex items-center px-3 py-3 border rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <Lock size={18} className="mr-2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="ml-2 text-gray-500 focus:outline-none"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <div className="flex items-center px-3 py-3 border rounded-lg focus-within:ring-2 focus-within:ring-blue-400">
                <Lock size={18} className="mr-2 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Re-enter your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>

            <div className="col-span-2">
              <button
                type="submit"
                className="w-full py-3 font-semibold text-white transition rounded-lg shadow bg-gradient-to-r from-blue-600 to-blue-600 hover:from-blue-500 hover:to-blue-500"
              >
                Register
              </button>
            </div>
          </form>





        </motion.div>
      </div>
    </div>
  );
}
