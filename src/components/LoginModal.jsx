import React, { useEffect } from "react";

export default function LoginModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
    }
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-title"
    >
      <div className="w-full max-w-md p-8 mx-4 transition-transform duration-300 transform scale-95 bg-white shadow-2xl rounded-xl sm:mx-0 animate-fadeIn">
        <button
          className="absolute text-gray-400 transition-colors top-4 right-4 hover:text-gray-700"
          onClick={onClose}
          aria-label="Close modal"
        >
          ✕
        </button>

        <h2
          id="login-title"
          className="mb-6 text-3xl font-extrabold text-center text-gray-800"
        >
          Welcome Back
        </h2>

        <form
          className="flex flex-col gap-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label className="flex flex-col">
            <span className="mb-1 text-sm text-gray-600">Email</span>
            <input
              type="email"
              placeholder="Email"
              className="p-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </label>

          <label className="flex flex-col">
            <span className="mb-1 text-sm text-gray-600">Password</span>
            <input
              type="password"
              placeholder="Password"
              className="p-3 transition border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              required
            />
          </label>

          <button
            type="submit"
            className="py-3 font-semibold text-white transition transform bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 hover:scale-105"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-sm text-center text-gray-500">
          Don't have an account?{" "}
          <span className="text-blue-500 cursor-pointer hover:underline">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
