// Footer.jsx
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#282a36] text-[#f8f8f2] py-8 border-t border-[#6272a4]/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Footer Text */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Zakariae Alliouate. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex space-x-4">
          <motion.a
            href="https://github.com/zakari-aee"
            target="_blank"
            rel="noreferrer"
            className="text-[#50fa7b] hover:text-[#8be9fd]"
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/zakariae-alliouate"
            target="_blank"
            rel="noreferrer"
            className="text-[#50fa7b] hover:text-[#8be9fd]"
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:zakariaealliouate@gmail.com"
            className="text-[#50fa7b] hover:text-[#8be9fd]"
            whileHover={{ scale: 1.2 }}
          >
            <FaEnvelope size={20} />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
