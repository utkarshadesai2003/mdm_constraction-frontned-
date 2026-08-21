import React, { useState } from "react";
import { CheckCircle } from "lucide-react"; 

const pricingPlans = [
  {
    name: "Basic",
    monthly: 500,
    yearly: 500 * 12 * 0.9,
    features: ["Site Survey", "Basic Materials",  "Initial Consultation", "Weekly Progress Report"],
  },
  {
    name: "Standard",
    monthly: 1200,
    yearly: 1200 * 12 * 0.9,
    features: ["Site Survey", "Quality Materials", "5 Workers", "Project Management"],
    popular: true,
  },
  {
    name: "Premium",
    monthly: 2500,
    yearly: 2500 * 12 * 0.9,
    features: ["Site Survey", "Premium Materials", "10 Workers",  "Interior Design"],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState("monthly");

  return (
    <section className="py-20 bg-gray-50">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">Construction Pricing</h2>
        <p className="mb-8 text-gray-600">Choose the plan that fits your construction needs.</p>

        <div className="relative inline-flex p-1 mb-12 bg-gray-200 rounded-full">
          <span
            className={`absolute top-0 left-0 h-full w-1/2 bg-white rounded-full shadow transform transition-transform duration-300 ${
              billing === "yearly" ? "translate-x-full" : ""
            }`}
          ></span>
          <button
            className={`relative px-6 py-2 rounded-full font-semibold transition z-10 ${
              billing === "monthly" ? "text-gray-900" : "text-gray-700"
            }`}
            onClick={() => setBilling("monthly")}
          >
            Monthly
          </button>
          <button
            className={`relative px-6 py-2 rounded-full font-semibold transition z-10 ${
              billing === "yearly" ? "text-gray-900" : "text-gray-700"
            }`}
            onClick={() => setBilling("yearly")}
          >
            Yearly
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col items-center p-8 bg-white shadow-xl rounded-3xl transform transition duration-500 hover:scale-105 ${
                plan.popular ? "bg-gradient-to-b from-blue-50 to-white border-4 border-blue-600" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-0 px-3 py-1 text-sm font-bold text-white bg-blue-600 rounded-b-xl">
                  Most Popular
                </span>
              )}
              <h3 className="mb-4 text-2xl font-semibold text-gray-800">{plan.name}</h3>
              <p className="mb-6 text-4xl font-bold text-gray-900">
                ${billing === "monthly" ? plan.monthly : plan.yearly.toFixed(0)}
                <span className="text-lg font-medium text-gray-500">/{billing}</span>
              </p>
              <ul className="mb-6 space-y-3 text-gray-600">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full px-6 py-3 text-white transition bg-blue-600 rounded-full shadow-lg hover:bg-blue-700">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}