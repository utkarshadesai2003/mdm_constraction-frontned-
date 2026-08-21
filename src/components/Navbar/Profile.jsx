import React, { useState } from "react";
import { User, Mail, Phone, Building, Lock } from "lucide-react";

export default function Profile() {
  const [name, setName] = useState("Utkarsha Desai");
  const [email, setEmail] = useState("you@example.com");
  const [phone, setPhone] = useState("+91 9876543210");
  const [company, setCompany] = useState("My Construction Co.");
  const [password, setPassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("✅ Profile updated successfully! (Integration pending)");
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-gradient-to-br from-indigo-50 via-white to-indigo-100">
      <div className="w-full max-w-4xl p-8 bg-white shadow-xl rounded-2xl">
        <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-800">
          My <span className="text-indigo-600">Profile</span>
        </h2>

        <form onSubmit={handleUpdate} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Full Name
              </label>
              <div className="flex items-center px-3 py-2 border rounded-lg focus-within:ring-2 focus-within:ring-indigo-400">
                <User size={18} className="mr-2 text-gray-400" />
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="flex items-center px-3 py-2 border rounded-lg focus-within:ring-2 focus-within:ring-indigo-400">
                <Mail size={18} className="mr-2 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div>
              <label className="block mb-1 text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <div className="flex items-center px-3 py-2 border rounded-lg focus-within:ring-2 focus-within:ring-indigo-400">
                <Phone size={18} className="mr-2 text-gray-400" />
                <input
                  type="tel"
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
              <div className="flex items-center px-3 py-2 border rounded-lg focus-within:ring-2 focus-within:ring-indigo-400">
                <Building size={18} className="mr-2 text-gray-400" />
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full text-sm outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Change Password
            </label>
            <div className="flex items-center px-3 py-2 border rounded-lg focus-within:ring-2 focus-within:ring-indigo-400">
              <Lock size={18} className="mr-2 text-gray-400" />
              <input
                type="password"
                placeholder="Enter new password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3 font-semibold text-white transition bg-indigo-600 rounded-lg shadow hover:bg-indigo-700"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
