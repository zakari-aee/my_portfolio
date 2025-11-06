// TerminalCard.jsx
import React from "react";
import { motion } from "framer-motion";

const skills = ["Node.js", "Python", "Go", "AWS", "Docker", "Kubernetes"];

export default function TerminalCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md font-mono border border-gray-200"
      >
        {/* Terminal top buttons */}
        <div className="flex space-x-2 mb-4">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* whoami */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-green-600 mb-2"
        >
          $ whoami
        </motion.p>
        <motion.h1
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
          className="text-3xl font-bold text-gray-900"
        >
          Alex Chen
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-600 mb-4"
        >
          Senior Backend Engineer
        </motion.p>

        {/* skills */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-green-600 mb-2"
        >
          $ skills
        </motion.p>
        <motion.div
          className="flex flex-wrap gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {skills.map((skill, index) => (
            <motion.span
              key={index}
              whileHover={{ scale: 1.1, backgroundColor: "#f0f0f0" }}
              className="px-3 py-1 border border-gray-300 rounded text-gray-800 text-sm cursor-pointer transition-all"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
