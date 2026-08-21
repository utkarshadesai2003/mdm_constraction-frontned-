import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Play, Building2, Users, Camera, Grid3X3, DraftingCompass, Ruler, Truck, Hammer, HardHat, Wrench } from "lucide-react";

export default function HeroSection() {

const projects = [
  { id: 1, type: "Building", icon: <Building2 className="w-8 h-8" /> },
  { id: 2, type: "Site Photos", icon: <Camera className="w-8 h-8" /> },
  { id: 3, type: "Blueprint", icon: <DraftingCompass className="w-8 h-8" /> },
  { id: 4, type: "Site Survey", icon: <Ruler className="w-8 h-8" /> },
  { id: 5, type: "Machinery", icon: <Truck className="w-8 h-8" /> },
  { id: 6, type: "Tools & Work", icon: <Hammer className="w-8 h-8" /> },
  
];


  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <div className="px-4 py-10 mx-auto max-w-7xl sm:px-6 md:px-10 lg:px-16 xl:px-20">
        <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium text-blue-500 bg-blue-100 rounded-full">
              <Building2 className="w-4 h-4 mr-2" />
              CONSTRUCTION SITE MANAGEMENT
            </div>

            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-5xl text-slate-900">
              Smarter,{" "}
              <span className="text-slate-700">Construction Site Management</span>{" "}
              <span className="text-transparent bg-gradient-to-r from-blue-600 to-blue-600 bg-clip-text">
                Tailored for Construction Firms
              </span>
            </h1>

            <p className="mb-8 text-base leading-relaxed sm:text-lg text-slate-600">
              Manage site photos and share progress seamlessly all in one powerful
              tool trusted by 1000+ construction firms.
            </p>

            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/freetrial">
                <button className="px-6 py-3 text-base font-medium text-white transition-all transform bg-blue-600 rounded-lg shadow-lg sm:px-8 sm:py-4 sm:text-lg hover:bg-blue-700 hover:shadow-xl">
                  Free Trial
                </button>
              </Link>
            </motion.div>
          </motion.div>

       
          <div className="relative flex flex-col items-center justify-center w-full mt-10 lg:flex-row lg:justify-end lg:mt-0 lg:gap-12">
      
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative w-full max-w-xs overflow-hidden shadow-2xl sm:max-w-sm md:max-w-md lg:max-w-xl rounded-3xl"
            >
              <img
                src="https://media.istockphoto.com/id/1042342584/photo/investors-and-contractors-on-construction-site.jpg?s=612x612&w=0&k=20&c=dfpqU0nr9BccCHOdHNyI1UanHGLt1nD2t6jZp95YUe4="
                alt="Construction Team"
                className="object-cover w-full h-60 sm:h-80 md:h-96 rounded-3xl"
              />
            </motion.div>

            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="absolute z-10 p-4 transition-transform bg-white shadow-lg sm:p-6 md:p-8 -right-2 top-4 sm:-right-12 md:-right-24 md:top-20 rounded-2xl w-44 sm:w-60 md:w-76 hover:scale-105"
              style={{ maxWidth: '90vw' }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Building2 className="w-6 h-6" />
                  <span className="font-semibold text-slate-800">ConstructPro</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4 mb-6 text-sm text-slate-600">
                <span className="pb-1 text-teal-600 border-b-2 border-teal-600">
                  All Projects
                </span>
                <span className="cursor-pointer hover:text-slate-800">Ongoing</span>
                <span className="cursor-pointer hover:text-slate-800">Completed</span>
              </div>

              <div className="px-2 mb-6">
                <div className="p-3 mb-3 rounded-lg bg-slate-50">
                  <div className="text-sm text-slate-500">Search projects...</div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs text-blue-700 bg-blue-100 rounded-full">
                    High-rise
                  </span>
                  <span className="px-3 py-1 text-xs rounded-full bg-slate-100 text-slate-700">
                    2025
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {projects.map((proj, i) => (
                  <div
                    key={proj.id}
                    className="relative transition-transform group hover:scale-105"
                  >
                    <div className="overflow-hidden rounded-lg shadow-sm aspect-square bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 hover:shadow-md">
                      <div className="flex items-center justify-center w-full h-full text-white">
                        {proj.icon}
                      </div>
                    </div>
                    {i === 0 && (
                      <div className="absolute inset-0 flex items-center justify-center bg-blue-600 rounded-lg bg-opacity-20">
                        <Play className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="pt-4 mt-4 ">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span>234 assets</span>
                  <span>Last updated 2 days ago</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="absolute z-10 p-3 transition-transform bg-white shadow-md sm:p-4 -bottom-2 sm:-bottom-4 -left-2 sm:-left-8 rounded-xl hover:scale-105"
              style={{ maxWidth: '80vw' }}
            >
              <div className="flex items-center gap-3">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                  <Users className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-800">
                    1000+ Firms
                  </div>
                  <div className="text-xs text-slate-500">Trust our platform</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
