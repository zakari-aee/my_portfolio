// HeroSection.jsx
import React, { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaNodeJs, FaPython, FaAws, FaDocker, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinux, FaReact, FaGithub, FaLinkedin, FaEnvelope, FaCode, FaTerminal } from "react-icons/fa";
import { SiGo, SiKubernetes, SiPostgresql, SiMongodb, SiCplusplus, SiMysql, SiRedis } from "react-icons/si";

// For VS Code icon, we'll use a different approach
const VSCodeIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .327 8.74L3.899 12 .327 15.26a1 1 0 0 0 0 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 19.06V4.94a1.5 1.5 0 0 0-.85-2.353z"/>
  </svg>
);

// Working LetterGlitch component
const LetterGlitch = () => {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@!%^&*()';
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

// Working Button Component
const GlitchButton = ({ children, onClick, className = "" }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.button
      onClick={onClick}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className={`relative px-6 py-3 bg-green-500 hover:bg-green-400 text-gray-900 font-bold rounded-lg overflow-hidden border-2 border-green-400 transition-all duration-300 ${className}`}
      whileHover={{ 
        scale: 1.05,
        y: -2
      }}
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

// HeroSection Component
export default function HeroSection() {
  const [activeSkill, setActiveSkill] = useState("all");
  const [terminalText, setTerminalText] = useState("");

  const skills = {
    all: [
      { name: "Python", icon: <FaPython className="w-5 h-5" /> },
      { name: "C++", icon: <SiCplusplus className="w-5 h-5" /> },
      { name: "JavaScript", icon: <FaJs className="w-5 h-5" /> },
      { name: "React", icon: <FaReact className="w-5 h-5" /> },
      { name: "Node.js", icon: <FaNodeJs className="w-5 h-5" /> },
      { name: "HTML5", icon: <FaHtml5 className="w-5 h-5" /> },
      { name: "CSS3", icon: <FaCss3Alt className="w-5 h-5" /> },
      { name: "Go", icon: <SiGo className="w-5 h-5" /> },
      { name: "VS Code", icon: <VSCodeIcon /> },
      { name: "Linux", icon: <FaLinux className="w-5 h-5" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
      { name: "Redis", icon: <SiRedis className="w-5 h-5" /> },
      { name: "Docker", icon: <FaDocker className="w-5 h-5" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="w-5 h-5" /> },
      { name: "AWS", icon: <FaAws className="w-5 h-5" /> },
      { name: "Git", icon: <FaGitAlt className="w-5 h-5" /> },
    ],
    language: [
      { name: "Python", icon: <FaPython className="w-5 h-5" /> },
      { name: "C++", icon: <SiCplusplus className="w-5 h-5" /> },
      { name: "JavaScript", icon: <FaJs className="w-5 h-5" /> },
      { name: "Go", icon: <SiGo className="w-5 h-5" /> },
    ],
    database: [
      { name: "PostgreSQL", icon: <SiPostgresql className="w-5 h-5" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-5 h-5" /> },
      { name: "MySQL", icon: <SiMysql className="w-5 h-5" /> },
      { name: "Redis", icon: <SiRedis className="w-5 h-5" /> },
    ],
    frontend: [
      { name: "React", icon: <FaReact className="w-5 h-5" /> },
      { name: "HTML5", icon: <FaHtml5 className="w-5 h-5" /> },
      { name: "CSS3", icon: <FaCss3Alt className="w-5 h-5" /> },
      { name: "JavaScript", icon: <FaJs className="w-5 h-5" /> },
    ],
    backend: [
      { name: "Node.js", icon: <FaNodeJs className="w-5 h-5" /> },
      { name: "Python", icon: <FaPython className="w-5 h-5" /> },
      { name: "Go", icon: <SiGo className="w-5 h-5" /> },
    ],
    tool: [
      { name: "VS Code", icon: <VSCodeIcon /> },
      { name: "Linux", icon: <FaLinux className="w-5 h-5" /> },
      { name: "Docker", icon: <FaDocker className="w-5 h-5" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="w-5 h-5" /> },
      { name: "Git", icon: <FaGitAlt className="w-5 h-5" /> },
    ],
    cloud: [
      { name: "AWS", icon: <FaAws className="w-5 h-5" /> },
      { name: "Docker", icon: <FaDocker className="w-5 h-5" /> },
      { name: "Kubernetes", icon: <SiKubernetes className="w-5 h-5" /> },
    ]
  };

  const texts = [
    "Full Stack Developer & DevOps Engineer",
    "Building modern web applications",
    "Passionate about clean code",
    "Creating innovative solutions"
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
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
      <LetterGlitch />
      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 bg-gray-900/80 backdrop-blur-sm rounded-xl p-8 w-11/12 max-w-4xl border border-green-500/30"
      >
        {/* Social Links */}
        <motion.div 
          className="absolute top-6 right-6 flex space-x-3"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            href="https://github.com/zakari-aee"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:text-green-300 bg-gray-800/50 p-2 rounded-lg border border-green-500/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub size={20} />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/zakariae-alliouate"
            target="_blank"
            rel="noreferrer"
            className="text-green-400 hover:text-green-300 bg-gray-800/50 p-2 rounded-lg border border-green-500/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:zakariaealliouate@gmail.com"
            className="text-green-400 hover:text-green-300 bg-gray-800/50 p-2 rounded-lg border border-green-500/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaEnvelope size={20} />
          </motion.a>
        </motion.div>

        {/* Main Content */}
        <div className="text-white font-mono space-y-6">
          {/* Terminal Header */}
          <motion.div 
            className="flex items-center space-x-2 text-green-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <FaTerminal className="w-5 h-5" />
            <span className="text-sm">terminal — zsh — 80×24</span>
          </motion.div>
          
          {/* Whoami Command */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-green-400"
          >
            <span className="text-blue-400">visitor@portfolio</span>:<span className="text-yellow-400">~</span>$ whoami
          </motion.p>
          
          {/* Name */}
          <motion.h1 
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "spring" }}
            className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent"
          >
            Zakariae Alliouate
          </motion.h1>
          
          {/* Typing Animation */}
          <motion.div 
            className="text-gray-300 text-lg h-8 flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {terminalText}
            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="ml-1"
            >
              |
            </motion.span>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            className="pt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <p className="text-green-400 text-sm">
                <span className="text-blue-400">visitor@portfolio</span>:<span className="text-yellow-400">~</span>$ skills
              </p>
              <div className="flex space-x-2 flex-wrap">
                {Object.keys(skills).map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveSkill(category)}
                    className={`px-3 py-1 text-xs rounded-full border transition-all ${
                      activeSkill === category 
                        ? "bg-green-500 text-gray-900 border-green-400" 
                        : "text-green-300 border-green-500/50 hover:bg-green-500/20"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <motion.div 
              layout
              className="flex flex-wrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                {skills[activeSkill]?.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    layout
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ 
                      delay: index * 0.05, 
                      type: "spring",
                      stiffness: 300 
                    }}
                    whileHover={{ 
                      scale: 1.05, 
                      backgroundColor: "#1f3a2f",
                      transition: { type: "spring", stiffness: 400 }
                    }}
                    className="px-4 py-2 border border-green-500 rounded-lg text-green-300 text-sm cursor-pointer flex items-center space-x-2 bg-gray-800/50 backdrop-blur-sm"
                  >
                    {skill.icon}
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            className="pt-6 text-green-400 text-sm space-y-1 font-mono border-t border-green-500/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
          >
            <p>$ email: <span className="text-blue-400">zakariaealliouate@gmail.com</span></p>
            <p>$ location: <span className="text-yellow-400">Morocco</span></p>
            <p>$ status: <span className="text-green-300">Available for projects</span></p>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, repeat: Infinity, repeatType: "reverse", duration: 2 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-sm mb-2">Scroll down</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}