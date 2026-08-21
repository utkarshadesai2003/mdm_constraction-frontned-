import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Sunrise Apartments", image: "https://images.ctfassets.net/pdf29us7flmy/35owokYDngxnaMn8IxisYt/c2b3ade6519dcf268dd0d6eac6a94f85/construction-site.jpg", description: "Modern residential complex with premium amenities." },
  { title: "Downtown Office Tower", image: "https://via.placeholder.com/400x300", description: "High-rise commercial building with state-of-the-art facilities." },
  { title: "Greenfield Industrial Park", image: "https://via.placeholder.com/400x300", description: "Efficiently designed industrial park." },
  { title: "Lakeside Villas", image: "https://via.placeholder.com/400x300", description: "Luxury villas with breathtaking lake views." },
];

export default function Projects() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="px-6 mx-auto max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-800 md:text-5xl">🏗️ Our Projects</h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600">
            Discover some of the outstanding projects we have successfully delivered.
          </p>
        </motion.div>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              className="overflow-hidden transition bg-white shadow-xl rounded-3xl hover:shadow-2xl"
            >
              <img src={project.image} alt={project.title} className="object-cover w-full h-48 transition-transform duration-500 hover:scale-110" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-800">{project.title}</h3>
                <p className="text-sm text-gray-600">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
