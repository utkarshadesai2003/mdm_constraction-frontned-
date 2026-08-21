import React from "react";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Building2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="pt-12 pb-6 mt-16 text-gray-300 bg-gray-900">
      <div className="grid grid-cols-1 gap-10 px-6 mx-auto max-w-7xl md:grid-cols-4">
        
        <div className="flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <Building2 size={28} className="text-blue-400" />
            <h2 className="text-2xl font-bold text-white">ConstructPro</h2>
          </div>
          <p className="mt-2 text-sm leading-6 text-gray-400">
            Building trust with every project. We deliver excellence in
            construction and design, ensuring client satisfaction.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/features"
                className="transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                to="/how-it-works"
                className="transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/pricing"
                className="transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                Pricing
              </Link>
            </li>
            <li>
              <Link
                to="/Team"
                className="transition-colors duration-300 hover:text-blue-400 hover:underline"
              >
                About Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Contact</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center space-x-2 transition transform hover:scale-105">
              <Phone size={18} className="text-blue-400" />
              <a href="tel:+919876543210" className="hover:text-blue-400">
                +91 98765 43210
              </a>
            </li>
            <li className="flex items-center space-x-2 transition transform hover:scale-105">
              <Mail size={18} className="text-blue-400" />
              <a href="mailto:support@example.com" className="hover:text-blue-400">
                support@example.com
              </a>
            </li>
            <li className="flex items-center space-x-2 transition transform hover:scale-105">
              <MapPin size={18} className="text-blue-400" />
              <a
                href="https://www.google.com/maps/place/Pune,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400"
              >
                Pune, India
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="transition-transform transform hover:scale-110 hover:text-blue-400"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="transition-transform transform hover:scale-110 hover:text-blue-400"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="transition-transform transform hover:scale-110 hover:text-blue-400"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="transition-transform transform hover:scale-110 hover:text-blue-400"
            >
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="pt-6 mt-10 text-sm text-center text-gray-500 border-t border-gray-700">
        © {new Date().getFullYear()} ConstructionPro. All rights reserved.
      </div>
    </footer>
  );
}
