import React, { useState, useEffect } from "react";
import { Menu, X, Shield, ChevronDown, User, Info, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import { LogOut } from "lucide-react"; // import the new icon


export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  const navigation = [
    { name: "Features", path: "/feature" },
    { name: "How It Works", path: "/howitswork" },
    { name: "Pricing", path: "/pricing" },
    {
      name: "About",
      submenu: [
        { name: "Our Team", path: "/team", icon: User },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = () => {
      setAboutOpen(false);
      setFeaturesOpen(false);
      setAccountOpen(false);
    };
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  const openDropdownWithTimeout = (setter) => {
    setter(true);
    setTimeout(() => setter(false), 15000);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all ${isScrolled ? "bg-white shadow-md" : "bg-white"
        }`}
    >
      <div className="px-6 mx-auto max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center space-x-2 cursor-pointer group">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-blue-600">
              ConstructPro
            </span>
          </Link>

          <nav className="items-center hidden space-x-8 md:flex">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onClick={(e) => e.stopPropagation()}
              >
                {item.submenu ? (
                  <button
                    className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600"
                    onClick={() => {
                      if (item.name === "Features")
                        openDropdownWithTimeout(setFeaturesOpen);
                      if (item.name === "About") openDropdownWithTimeout(setAboutOpen);
                    }}
                  >
                    <span>{item.name}</span>
                    <ChevronDown size={14} />
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className="font-medium text-gray-700 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                )}

                {item.submenu &&
                  ((item.name === "Features" && featuresOpen) ||
                    (item.name === "About" && aboutOpen)) && (
                    <div className="absolute w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg">
                      {item.submenu.map((sub) => {
                        const Icon = sub.icon;
                        return (
                          <Link
                            key={sub.name}
                            to={sub.path}
                            className="flex items-center px-4 py-2 space-x-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                          >
                            {Icon && <Icon size={16} />}
                            <span>{sub.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
              </div>
            ))}

            <div className="relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => openDropdownWithTimeout(setAccountOpen)}
                className="flex items-center space-x-1 font-medium text-gray-700 hover:text-blue-600"
              >
                <User size={18} />
                <span>Account</span>
                <ChevronDown size={14} />
              </button>

              {accountOpen && (
                <div className="absolute mt-2 bg-white border border-gray-200 rounded-lg shadow-lg w-44">
                  <Link
                    to="/login"
                    className="flex items-center px-4 py-2 space-x-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <User size={16} />
                    <span>Login</span>
                  </Link>
                  <Link
                    to="/profile"
                    className="flex items-center px-4 py-2 space-x-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Info size={16} />
                    <span>Profile</span>
                  </Link>
                  <Link
                    to="/settings"
                    className="flex items-center px-4 py-2 space-x-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Shield size={16} />
                    <span>Settings</span>
                  </Link>

                  <Link
                    to="/logout"
                    className="flex items-center px-4 py-2 space-x-2 text-gray-700 hover:bg-red-50"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </Link>


                </div>
              )}
            </div>

            <div className="flex items-center ml-6 space-x-4 text-sm text-gray-600">
              <a
                href="mailto:support@example.com"
                className="flex items-center hover:text-blue-600"
              >
                <Mail size={16} className="mr-1" /> support@example.com
              </a>
            </div>

            <Link
              to="/freetrial"
              className="px-5 py-2 ml-6 font-semibold text-white rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              Free Trial
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
