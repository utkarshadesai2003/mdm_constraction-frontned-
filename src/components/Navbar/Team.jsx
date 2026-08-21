import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Project Manager",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq1nYPZWx7l7Yq-giiJcj9sUUyJ_7_BxfoHOUHGafYxbRSIlU1yH41SCTkSWJ7DWY&s&ec=73068123",
    bio: "Oversees project execution ensuring quality and timelines.",
  },
  {
    name: "John Doe",
    role: "Architect",
    image: "https://via.placeholder.com/150",
    bio: "Designs innovative and sustainable structures for clients.",
  },
  {
    name: "Emma Smith",
    role: "Engineer",
    image: "https://via.placeholder.com/150",
    bio: "Ensures all technical aspects meet industry standards.",
  },
  {
    name: "Olivia Brown",
    role: "Interior Designer",
    image: "https://via.placeholder.com/150",
    bio: "Creates interiors blending functionality and aesthetics.",
  },
];

export default function Team() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

      <div className="relative px-6 mx-auto max-w-7xl lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-extrabold tracking-tight text-gray-800 md:text-6xl">
          Our Team
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 md:text-xl">
            Meet the professionals who make your construction dreams a reality.
          </p>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
              className="p-6 text-center transition bg-white shadow-xl rounded-3xl hover:shadow-2xl"
            >
              <div className="p-1 mx-auto mb-4 rounded-full w-36 h-36 bg-gradient-to-tr">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-full h-full rounded-full shadow-inner"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
              <p className="mb-3 text-sm font-medium text-blue-600">{member.role}</p>
              <p className="text-sm text-gray-600">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
