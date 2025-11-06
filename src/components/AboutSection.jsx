// AboutSection.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

// Glitch Background Canvas
const LetterGlitch = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@!%^&*()qwertyuiopasdfghjklzxcvbnm';
    const fontSize = 14;
    const columns = Math.floor(width / fontSize);
    const drops = Array(columns).fill(1);

    function draw() {
      ctx.fillStyle = 'rgba(15, 23, 42, 0.05)';
      ctx.fillRect(0, 0, width, height);
      
      ctx.fillStyle = '#10b981';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(Math.floor(Math.random() * characters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        
        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    }

    function animate() {
      draw();
      animationRef.current = requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    />
  );
};

// Glitch Button Component
const GlitchButton = ({ children, onClick, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative px-6 py-3 bg-green-500 hover:bg-green-400 text-gray-900 font-bold rounded-lg overflow-hidden border-2 border-green-400 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      
      {isHovered && (
        <motion.div
          className="absolute inset-0 bg-white/20"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ duration: 0.5 }}
        />
      )}
    </motion.button>
  );
};

// LeetCode SVG Icon
const LeetCodeIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.012-.012-4.106-4.106a3.029 3.029 0 0 1 0-4.289l3.634-3.635a1.384 1.384 0 0 0 0-1.955l-3.63-3.634a1.374 1.374 0 0 0-1.95 0L2.831 5.971a5.443 5.443 0 0 0-1.693 3.879c0 1.47.612 2.835 1.693 3.879l4.794 4.794a7.628 7.628 0 0 0 10.818 0l4.794-4.794A5.443 5.443 0 0 0 24 9.85a5.443 5.443 0 0 0-1.693-3.879L14.445.438A1.374 1.374 0 0 0 13.483 0z"/>
  </svg>
);

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("experience");
  const [terminalText, setTerminalText] = useState("");

  const experiences = [
    {
      year: "2025 - Present",
      title: "Student",
      company: "1337 School",
      description: "Intensive coding school focusing on C programming, Linux, shell scripting, and Git version control.",
      technologies: ["C", "Linux", "Shell", "Git", "Algorithms", "Data Structures"]
    }
  ];

  const education = [
    {
      year: "2023- 2024",
      degree: "Bachelor's Degree",
      institution: "Morocco university Molai Smail"
    },
    {
      year: "2024 - 2026",
      degree: "Full Stack Developer",
      institution: "OFPPT - 2 Year Program"
    }
  ];

  const texts = [
    "Passionate about coding and technology...",
    "student at 1337 School...",
    "Specialized in C programming and Linux systems...",
    "Always learning and exploring new challenges..."
  ];

  useEffect(() => {
    let currentIndex = 0;
    let currentText = "";
    let isDeleting = false;
    let typingSpeed = 100;

    const type = () => {
      const fullText = texts[currentIndex];

      if (isDeleting) {
        currentText = fullText.substring(0, currentText.length - 1);
      } else {
        currentText = fullText.substring(0, currentText.length + 1);
      }

      setTerminalText(currentText);

      if (!isDeleting && currentText === fullText) {
        typingSpeed = 2000;
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % texts.length;
        typingSpeed = 500;
      } else {
        typingSpeed = isDeleting ? 50 : 100;
      }

      setTimeout(type, typingSpeed);
    };

    type();
  }, []);

  return (
    <section id="about" className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 py-20">
      {/* Glitch Background */}
      <LetterGlitch />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 bg-gray-900/90 backdrop-blur-sm rounded-xl p-8 w-11/12 max-w-6xl border border-green-500/30"
      >
        {/* Terminal Header */}
        <div className="flex items-center space-x-2 text-green-400 mb-6">
          <span className="text-sm">$ about_me</span>
        </div>
        
        {/* Whoami Command */}
        <p className="text-green-400 mb-4">
          <span className="text-blue-400">visitor@portfolio</span>:<span className="text-yellow-400">~</span>$ cat about_me.txt
        </p>
        
        {/* Main Title */}
        <motion.h1 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          viewport={{ once: true }}
          className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-6"
        >
          About Me
        </motion.h1>
        
        {/* Typing Animation */}
        <div className="text-gray-300 text-lg h-8 flex items-center mb-8">
          {terminalText}
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="ml-1"
          >
            |
          </motion.span>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Personal Card */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-green-500/30">
              <h3 className="text-green-400 text-lg font-bold mb-4">
                Personal Info
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Name:</span>
                  <span className="text-green-300">Zakariae Alliouate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-green-300">Morocco</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-blue-300">zakariaealliouate@gmail.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience:</span>
                  <span className="text-yellow-300">Student</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-300">Available</span>
                </div>
              </div>
            </div>

            {/* Download Resume Button */}
            <GlitchButton 
              onClick={() => console.log("Download Resume")}
              className="w-full justify-center"
            >
              Download Resume
            </GlitchButton>

            {/* Quick Stats */}
            <div className="bg-gray-800/50 rounded-lg p-6 border border-blue-500/30">
              <h3 className="text-blue-400 text-lg font-bold mb-4">
                Quick Stats
              </h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Projects Completed:</span>
                  <span className="text-green-300">10+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Coding Level:</span>
                  <span className="text-green-300">Intermediate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Code Commits:</span>
                  <span className="text-green-300">700+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">LeetCode Problems:</span>
                  <span className="text-orange-300">100+</span>
                </div>
              </div>
            </div>

            {/* LeetCode Link */}
            <motion.a
              href="https://leetcode.com/u/zakari_aee/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-gray-800/50 p-3 rounded-lg border border-orange-500/30 hover:border-orange-400 transition-all duration-300 text-orange-400 hover:text-orange-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LeetCodeIcon />
              <span className="text-sm font-mono">LeetCode Profile</span>
            </motion.a>
          </motion.div>

          {/* Right Column - Experience & Education */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Tab Navigation */}
            <div className="flex space-x-4 border-b border-gray-700">
              <button
                onClick={() => setActiveTab("experience")}
                className={`px-4 py-2 border-b-2 transition-all ${
                  activeTab === "experience"
                    ? "border-green-500 text-green-400"
                    : "border-transparent text-gray-400 hover:text-green-300"
                }`}
              >
                Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`px-4 py-2 border-b-2 transition-all ${
                  activeTab === "education"
                    ? "border-green-500 text-green-400"
                    : "border-transparent text-gray-400 hover:text-green-300"
                }`}
              >
                Education
              </button>
            </div>

            {/* Tab Content */}
            <div className="space-y-6">
              {activeTab === "experience" && 
                experiences.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 pb-8 border-l-2 border-green-500"
                  >
                    <div className="absolute -left-2.5 top-0 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900"></div>
                    <div className="mb-2">
                      <span className="text-green-300 text-sm">{exp.year}</span>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-1">{exp.title}</h3>
                    <p className="text-green-400 mb-2">{exp.company}</p>
                    <p className="text-gray-300 mb-3 text-sm">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-gray-800 text-green-300 text-xs rounded border border-green-500/30">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))
              }

              {activeTab === "education" && 
                education.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="relative pl-8 pb-8 border-l-2 border-blue-500"
                  >
                    <div className="absolute -left-2.5 top-0 w-4 h-4 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                    <div className="mb-2">
                      <span className="text-blue-300 text-sm">{edu.year}</span>
                    </div>
                    <h3 className="text-white text-lg font-bold mb-1">{edu.degree}</h3>
                    <p className="text-blue-400">{edu.institution}</p>
                  </motion.div>
                ))
              }
            </div>

            {/* Skills Overview */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6"
            >
              {[
                { label: "C Programming", count: "1337 School", color: "text-yellow-400" },
                { label: "Linux/Shell", count: "System Admin", color: "text-blue-400" },
                { label: "Git", count: "Version Control", color: "text-green-400" },
                { label: "Full Stack", count: "OFPPT Program", color: "text-orange-400" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gray-800/50 rounded-lg p-4 text-center border border-green-500/30"
                >
                  <h4 className={`font-bold text-sm mb-1 ${skill.color}`}>{skill.label}</h4>
                  <p className="text-green-300 text-xs">{skill.count}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Footer Info */}
        <motion.div 
          className="mt-8 pt-6 text-green-400 text-sm space-y-1 font-mono border-t border-green-500/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
        >
          <p>$ more_info: <span className="text-blue-400">Passionate about coding and system programming</span></p>
          <p>$ interests: <span className="text-yellow-400">C Programming, Linux, Shell Scripting, Git</span></p>
        </motion.div>
      </motion.div>
    </section>
  );
}