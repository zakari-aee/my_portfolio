// AboutSection.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Simple Button Component
const GlitchButton = ({ children, onClick, className = "" }) => {
  return (
    <motion.button
      onClick={onClick}
      className={`px-6 py-3 bg-green-500 hover:bg-green-400 text-gray-900 font-bold rounded-lg border-2 border-green-400 transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("experience");
  const [terminalText, setTerminalText] = useState("");

  const experiences = [
    {
      year: "2023 - Present",
      title: "Full Stack Developer",
      company: "Tech Solutions Inc.",
      description: "Developing scalable web applications using modern technologies and cloud infrastructure.",
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "AWS", "Docker"]
    },
    {
      year: "2021 - 2023",
      title: "Backend Developer",
      company: "Digital Innovations",
      description: "Built RESTful APIs and microservices architecture for enterprise applications.",
      technologies: ["JavaScript", "MongoDB", "Express.js", "Redis", "Linux"]
    },
    {
      year: "2019 - 2021",
      title: "Junior Developer",
      company: "StartUp Labs",
      description: "Started my career building frontend interfaces and learning full-stack development.",
      technologies: ["HTML5", "CSS3", "JavaScript", "React", "Git"]
    }
  ];

  const education = [
    {
      year: "2017 - 2021",
      degree: "Bachelor of Computer Science",
      institution: "University of Technology, Morocco"
    },
    {
      year: "2015 - 2017",
      degree: "High School Diploma - Science",
      institution: "Lycee Technique, Casablanca"
    }
  ];

  const texts = [
    "Passionate about technology and innovation...",
    "Full Stack Developer with 4+ years of experience...",
    "Specialized in modern web technologies...",
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
                  <span className="text-green-300">Ziko Alliouate</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Location:</span>
                  <span className="text-green-300">Morocco</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Email:</span>
                  <span className="text-blue-300">ziko@example.com</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Experience:</span>
                  <span className="text-yellow-300">4+ Years</span>
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
                  <span className="text-green-300">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Happy Clients:</span>
                  <span className="text-green-300">30+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Code Commits:</span>
                  <span className="text-green-300">2k+</span>
                </div>
              </div>
            </div>
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
                { label: "Frontend", count: "12 Projects", color: "text-yellow-400" },
                { label: "Backend", count: "8 Projects", color: "text-blue-400" },
                { label: "Database", count: "15+ DBs", color: "text-green-400" },
                { label: "Cloud", count: "5+ Deployments", color: "text-orange-400" }
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
          <p>$ more_info: <span className="text-blue-400">Passionate about creating efficient and scalable solutions</span></p>
          <p>$ interests: <span className="text-yellow-400">Open Source, DevOps, Machine Learning</span></p>
        </motion.div>
      </motion.div>
    </section>
  );
}