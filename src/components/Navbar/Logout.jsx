import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("authToken"); 
    sessionStorage.clear();

    const timer = setTimeout(() => {
      navigate("/Login");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="max-w-md p-8 text-center bg-white shadow-lg rounded-2xl">
        <h2 className="mb-4 text-2xl font-bold text-gray-800">
          Logging Out...
        </h2>
        <p className="text-gray-600">
          You are being signed out. Redirecting to{" "}
          <span className="font-semibold text-indigo-600">Login</span> page.
        </p>
      </div>
    </div>
  );
}
