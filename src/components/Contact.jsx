
import React from 'react';
import { FaMapMarkerAlt, FaFileAlt, FaGithub, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';
import { SiX } from 'react-icons/si';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="bg-gray-800 rounded-lg shadow-2xl overflow-hidden w-full max-w-2xl"
      >
        {/* Terminal Header */}
        <div className="bg-gray-700 p-3 flex space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>

        {/* Terminal Body */}
        <div className="p-6 font-mono text-sm sm:text-base text-green-400">
          {/* Let's Connect */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-4"
          >
            <span className="text-green-400">$</span> contact --info
          </motion.p>
          
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-8 ml-4"
          >
            Let's Connect
          </motion.h2>

          {/* Location */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mb-2"
          >
            <span className="text-green-400">$</span> location --current
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex items-center ml-4 mb-8"
          >
            <FaMapMarkerAlt className="mr-2 text-red-400" />
            <span className="text-gray-300">Morocco</span>
          </motion.div>

          {/* Email */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="mb-2"
          >
            <span className="text-green-400">$</span> contact --email
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-gray-300 ml-4 mb-8"
          >
            ziko@example.com
          </motion.p>

          {/* Resume Download */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="mb-2"
          >
            <span className="text-green-400">$</span> cat resume.pdf
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6 }}
            className="ml-4 mb-10"
          >
            <a
              href="/path/to/your/resume.pdf"
              download="ziko_alliouate_resume.pdf"
              className="inline-flex items-center px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-md shadow-lg transition duration-200"
            >
              <FaFileAlt className="mr-2" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mb-4"
          >
            <span className="text-green-400">$</span> ls ./social-links
          </motion.p>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 ml-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.0 }}
          >
            {/* GitHub Card */}
            <motion.a
              href="https://github.com/zikoallio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
              className="flex flex-col items-center p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-200"
            >
              <FaGithub className="text-white text-3xl mb-2" />
              <span className="text-green-400 font-bold">GitHub</span>
              <span className="text-gray-400 text-xs">@zikoallio</span>
            </motion.a>

            {/* LinkedIn Card */}
            <motion.a
              href="https://linkedin.com/in/ziko-alliouate"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
              className="flex flex-col items-center p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-200"
            >
              <FaLinkedinIn className="text-white text-3xl mb-2" />
              <span className="text-green-400 font-bold">LinkedIn</span>
              <span className="text-gray-400 text-xs">Ziko Alliouate</span>
            </motion.a>

            {/* Email Card */}
            <motion.a
              href="mailto:ziko@example.com"
              whileHover={{ scale: 1.05, backgroundColor: "#1f2937" }}
              className="flex flex-col items-center p-4 bg-gray-700 rounded-md hover:bg-gray-600 transition duration-200"
            >
              <FaEnvelope className="text-white text-3xl mb-2" />
              <span className="text-green-400 font-bold">Email</span>
              <span className="text-gray-400 text-xs">ziko@example.com</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
