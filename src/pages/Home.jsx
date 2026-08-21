// src/pages/Home.jsx
import React from "react";
import HeaderSlider from "../components/HeaderSlider";

export default function Home() {
  return (
    <div>
      <HeaderSlider />
      <section className="p-10 text-center">
        <h2 className="mb-4 text-3xl font-bold">Welcome to BuildPro Constructions</h2>
        <p className="max-w-3xl mx-auto text-gray-600">
          We are committed to delivering top-notch construction services across residential, 
          commercial, and industrial projects with innovation and trust.
        </p>
      </section>
    </div>
  );
}
