import React, { useState, useEffect } from "react";
import { User, Building2, MapPin, Bell, BarChart2, ArrowRight } from "lucide-react";
import { Zap } from "lucide-react";


const steps = [
  {
    icon: User,
    title: "Sign Up & Secure Login",
    description:
      "Clients create accounts and securely log in from web or mobile devices using modern authentication.",
    color: "from-blue-500 to-blue-500",
    shadowColor: "shadow-blue-400/30",
    bgColor: "bg-blue-100",
    number: "01"
  },
  {
    icon: Building2,
    title: "Site & Project Setup",
    description:
      "Easily add new construction sites and projects, upload documents, blueprints, and assign resources.",
    color: "from-pink-500 to-pink-500",
    shadowColor: "shadow-blue-400/30",

    bgColor: "bg-blue-100",
    number: "02"
  },
  {
    icon: MapPin,
    title: "Real-Time Tracking & Monitoring",
    description:
      "Access dashboards showing real-time status of sites, resources, and teams.",
    color: "from-yellow-500 to-yellow-500",
    shadowColor: "shadow-blue-400/30",

    bgColor: "bg-blue-100",
    number: "03"
  },
  {
    icon: Bell,
    title: "Alerts & Notifications",
    description:
      "Receive instant notifications for schedule changes or completed tasks, ensuring efficient communication.",
    color: "from-green-500 to-green-500",
    shadowColor: "shadow-blue-400/30",

    bgColor: "bg-blue-100",
    number: "04"
  },
  {
    icon: BarChart2,
    title: "Reporting & Analytics",
    description:
      "Generate project reports, cost summaries, and analyze performance with customizable dashboards.",
    color: "from-purple-500 to-purple-500",
    shadowColor: "shadow-blue-400/30",

    bgColor: "bg-blue-100",
    number: "05"
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative py-32 overflow-hidden bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100"
      id="how-it-works"
    >
      <div className="relative z-10 px-6 mx-auto max-w-7xl lg:px-8">
        <div className={`mb-24 text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-semibold tracking-wide text-blue-700 bg-blue-200 rounded-full">
            <Zap className="w-5 h-5 mr-2" />
            Simple Process
          </div>

          <h2 className="mb-6 text-6xl font-black text-transparent md:text-6xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text">
            How It Works
          </h2>
          <p className="max-w-3xl mx-auto text-xl leading-relaxed text-gray-600">
            A seamless journey from concept to completion, designed to transform your construction management experience
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5 lg:gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;
            const delay = index * 200;

            return (
              <div
                key={index}
                className={`group relative transform transition-all duration-700 hover:scale-105 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
                style={{ transitionDelay: `${delay}ms` }}
                onMouseEnter={() => setActiveStep(index)}
              >
                <div className={`relative p-8 rounded-3xl backdrop-blur-lg transition-all duration-500 border ${isActive
                  ? 'bg-white/90 border-gray-300 shadow-2xl shadow-gray-300/20'
                  : 'bg-white/90 border-gray-200 hover:bg-white/15'
                  }`}>

                  <div className="absolute flex items-center justify-center w-12 h-12 text-sm font-bold text-white bg-blue-600 rounded-full shadow-lg -top-4 -right-4">
                    {step.number}
                  </div>

                  <div className="relative mb-8">
                    <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-xl ${step.shadowColor} transform transition-all duration-500 ${isActive ? 'scale-110 shadow-2xl' : 'group-hover:scale-105'}`}>
                      <Icon size={32} className="text-white" />
                    </div>

                    {isActive && (
                      <div className="absolute inset-0 w-20 h-20 mx-auto border-2 rounded-2xl border-white/50 animate-ping"></div>
                    )}
                  </div>

                  <div className="space-y-4 text-center">
                    <h3 className="text-xl font-bold text-black transition-colors duration-300 group-hover:text-gray-900">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
                      {step.description}
                    </p>
                  </div>

                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10`}></div>
                </div>

                {index < steps.length - 1 && (
                  <div className="absolute z-20 hidden transform -translate-y-1/2 lg:block top-1/2 -right-3">
                    <div className="flex items-center">
                      <div className={`w-6 h-0.5 bg-blue-400/40 transition-all duration-500 ${isActive ? 'scale-x-110' : ''}`}></div>
                      <ArrowRight size={16} className={`ml-1 text-gray-500/60 transition-all duration-500 ${isActive ? 'translate-x-1 text-gray-700' : ''}`} />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-16 space-x-3">
          {steps.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeStep ? 'bg-blue-700 shadow-lg shadow-gray-400/50' : 'bg-gray-400/30 hover:bg-gray-500/50'}`}
              onClick={() => setActiveStep(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
