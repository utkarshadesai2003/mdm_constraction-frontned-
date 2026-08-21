import React from "react";
import { motion } from "framer-motion";

const careers = [
  { title: "Project Manager", location: "Pune, India", description: "Lead construction projects from planning to completion." },
  { title: "Site Engineer", location: "Pune, India", description: "Oversee site activities and ensure safety standards." },
  { title: "Architect", location: "Bangalore, India", description: "Design innovative and sustainable buildings." },
  { title: "Interior Designer", location: "Delhi, India", description: "Create aesthetically pleasing and functional interiors." },
];

export default function Careers() {
  return (
    <section className="py-28 bg-gradient-to-br from-purple-50 via-white to-purple-100">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-extrabold text-gray-800 md:text-6xl">Careers</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 md:text-xl">
            Explore exciting career opportunities with our team and grow your professional journey.
          </p>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {careers.map((job, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="flex flex-col justify-between p-8 transition bg-white shadow-xl rounded-3xl hover:shadow-2xl"
            >
              <div>
                <h3 className="mb-3 text-2xl font-semibold text-gray-800">{job.title}</h3>
                <p className="mb-4 text-sm font-medium text-purple-600">{job.location}</p>
                <p className="text-sm text-gray-600">{job.description}</p>
              </div>
              <button className="px-5 py-3 mt-6 font-semibold text-white transition-all shadow-lg rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                Apply Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
