import React, { useState } from "react";
import { Building2, Package, AlertTriangle, Camera, X, Zap, Shield, BarChart3, Settings } from "lucide-react";
import { DollarSign } from "lucide-react";

const features = [
  {
    icon: Building2,
    title: "Site Management",
    description: "Professional site handling to ensure quality and safety.",
    color: "from-blue-400 to-blue-600",
    path: "site",
    blueprint: {
      title: "Site Management Blueprint",
      features: [
        "Real-time project tracking",
        "Resource allocation optimization",
        "Quality control checkpoints",
        "Safety compliance monitoring",
        "Progress reporting dashboard"
      ],
      techSpecs: [
        { label: "Coverage", value: "24/7 Monitoring" },
        { label: "Response Time", value: "< 5 minutes" },
        { label: "Accuracy", value: "99.8%" },
        { label: "Integration", value: "Multi-platform" }
      ]
    }
  },
  {
    icon: DollarSign,
    title: "Finances Management",
    description: "Our projects blend aesthetics with functionality for modern living.",
    color: "from-emerald-400 to-emerald-600",
    path: "Finances",
    blueprint: {
      title: "Financial Management System",
      features: [
        "Automated expense tracking",
        "Budget forecasting & analysis",
        "Invoice management system",
        "Cost optimization algorithms",
        "Financial reporting suite"
      ],
      techSpecs: [
        { label: "Processing", value: "Real-time" },
        { label: "Accuracy", value: "99.9%" },
        { label: "Security", value: "Bank-grade" },
        { label: "Compliance", value: "SOX & GAAP" }
      ]
    }
  },
  {
    icon: Package,
    title: "Inventory Management",
    description: "Strict safety protocols are followed at every step of the project.",
    color: "from-purple-400 to-purple-600",
    path: "Inventory",
    blueprint: {
      title: "Smart Inventory System",
      features: [
        "AI-powered demand forecasting",
        "Automated reorder points",
        "Multi-location tracking",
        "Quality control integration",
        "Supplier management portal"
      ],
      techSpecs: [
        { label: "Tracking", value: "RFID + Barcode" },
        { label: "Updates", value: "Real-time sync" },
        { label: "Accuracy", value: "99.7%" },
        { label: "Locations", value: "Unlimited" }
      ]
    }
  },
  {
    icon: AlertTriangle,
    title: "Alert Team Management",
    description: "We work closely with our clients to bring their vision to life.",
    color: "from-red-400 to-red-600",
    path: "team",
    blueprint: {
      title: "Emergency Response System",
      features: [
        "Instant alert notifications",
        "Multi-channel communication",
        "Escalation protocols",
        "Response team coordination",
        "Incident tracking & analysis"
      ],
      techSpecs: [
        { label: "Response", value: "< 30 seconds" },
        { label: "Channels", value: "SMS, Email, Push" },
        { label: "Uptime", value: "99.99%" },
        { label: "Coverage", value: "Global" }
      ]
    }
  },
  {
    icon: Camera,
    title: "Site Monitoring Management",
    description: "Delivering reliable, high-quality projects with industry recognition.",
    color: "from-indigo-400 to-indigo-600",
    path: "monitoring",
    blueprint: {
      title: "Advanced Monitoring Suite",
      features: [
        "HD camera surveillance",
        "Motion detection alerts",
        "Time-lapse recording",
        "Remote access control",
        "Analytics & reporting"
      ],
      techSpecs: [
        { label: "Resolution", value: "4K Ultra HD" },
        { label: "Storage", value: "Cloud + Local" },
        { label: "Detection", value: "AI-powered" },
        { label: "Access", value: "24/7 Remote" }
      ]
    }
  },
];

export default function Feature() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  const openBlueprint = (feature) => {
    setSelectedFeature(feature);
  };

  const closeBlueprint = () => {
    setSelectedFeature(null);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-br from-gray-100 via-gray-100 to-gray-100" id="features">
        <div className="px-6 mx-auto max-w-7xl lg:px-8">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
              <Zap className="w-4 h-4 mr-2" />
              Advanced Features
            </div>
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Cutting-Edge Solutions
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Discover our comprehensive suite of tools designed to revolutionize your construction management experience
            </p>
          </div>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="relative p-8 transition-all duration-500 transform border shadow-lg group bg-white/70 backdrop-blur-sm border-white/50 rounded-3xl hover:shadow-2xl hover:-translate-y-2 hover:scale-105"
                  style={{
                    animationDelay: `${index * 150}ms`,
                    animation: 'fadeInUp 0.8s ease-out forwards',
                  }}
                >
                  <div className="absolute inset-0 transition-opacity duration-500 opacity-0 pointer-events-none rounded-3xl bg-gradient-to-r from-transparent via-white to-transparent group-hover:opacity-100" />
                  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl">
                    <div className="absolute w-2 h-2 transition-all duration-700 transform bg-blue-400 rounded-full opacity-0 top-4 right-4 group-hover:opacity-100 group-hover:translate-x-2 group-hover:-translate-y-2" />
                    <div className="absolute w-1 h-1 transition-all duration-500 delay-200 transform bg-purple-400 rounded-full opacity-0 top-12 right-8 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    <div className="absolute bottom-8 left-6 w-1.5 h-1.5 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 delay-100 transform group-hover:-translate-x-1 group-hover:translate-y-1" />
                  </div>
                  <div className="relative z-10">
                    <div
                      className={`flex items-center justify-center w-16 h-16 mb-6 text-white rounded-2xl bg-gradient-to-r ${feature.color} shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 group-hover:rotate-3`}
                    >
                      <Icon size={32} className="transition-transform duration-300 group-hover:scale-110" />
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600">
                      {feature.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-gray-600">
                      {feature.description}
                    </p>
                    <button
                      onClick={() => openBlueprint(feature)}
                      className={`inline-flex items-center px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r ${feature.color} rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 group-hover:shadow-xl`}
                    >
                      View Blueprint
                      <Settings className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:rotate-90" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedFeature && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeBlueprint}
            style={{
              animation: 'fadeIn 0.3s ease-out forwards'
            }}
          />
          
          <div 
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
            style={{
              animation: 'slideInUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
            }}
          >
            <div className={`relative px-8 py-6 bg-gradient-to-r ${selectedFeature.color} text-white rounded-t-3xl overflow-hidden`}>
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-grid-white/[0.1]" style={{
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }} />
              </div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center">
                  <selectedFeature.icon className="w-8 h-8 mr-3" />
                  <h2 className="text-2xl font-bold">{selectedFeature.blueprint.title}</h2>
                </div>
                <button
                  onClick={closeBlueprint}
                  className="p-2 transition-all duration-200 rounded-full text-white/80 hover:text-white hover:bg-white/20"
                >
                  <X size={24} />
                </button>
              </div>
            </div>

            <div className="p-8 space-y-12">
              <div>
                <h3 className="flex items-center mb-6 text-xl font-bold text-gray-900">
                  <BarChart3 className="w-5 h-5 mr-2 text-blue-600" />
                  Technical Specifications
                </h3>
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
                  {selectedFeature.blueprint.techSpecs.map((spec, index) => (
                    <div 
                      key={index}
                      className="p-5 border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl"
                      style={{
                        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s forwards`,
                        opacity: 0
                      }}
                    >
                      <div className="mb-1 text-sm text-gray-600">{spec.label}</div>
                      <div className="text-lg font-semibold text-gray-900">{spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="flex items-center mb-6 text-xl font-bold text-gray-900">
                  <Shield className="w-5 h-5 mr-2 text-green-600" />
                  Key Features
                </h3>
                <div className="grid gap-5 md:grid-cols-2">
                  {selectedFeature.blueprint.features.map((featureItem, index) => (
                    <div 
                      key={index}
                      className="flex items-center p-5 transition-colors duration-200 bg-gray-50 rounded-xl hover:bg-gray-100"
                      style={{
                        animation: `fadeInLeft 0.6s ease-out ${index * 0.1}s forwards`,
                        opacity: 0
                      }}
                    >
                      <div className={`w-2.5 h-2.5 rounded-full bg-gradient-to-r ${selectedFeature.color} mr-3`} />
                      <span className="font-medium text-gray-700">{featureItem}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(60px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
