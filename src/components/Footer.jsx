// Footer.jsx
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Floating particles animation
  const floatingParticles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 4,
    size: Math.random() * 3 + 1,
  }));

  // Typing animation variants
  const typingVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  // Stagger children animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // Child variants for staggering
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Blinking cursor animation
  const cursorVariants = {
    blinking: {
      opacity: [0, 1, 0],
      transition: {
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  // Gradient line animation
  const gradientLineVariants = {
    initial: { scaleX: 0, opacity: 0 },
    animate: {
      scaleX: 1,
      opacity: 1,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.8
      }
    }
  };

  // Background pulse animation
  const backgroundPulseVariants = {
    pulse: {
      opacity: [0.3, 0.6, 0.3],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse"
      }
    }
  };

  return (
    <footer className="relative bg-gray-900/95 backdrop-blur-sm border-t border-green-500/30 py-12 overflow-hidden">
      {/* Animated floating particles */}
      {floatingParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute text-green-400/20 pointer-events-none"
          style={{
            left: `${particle.x}%`,
            bottom: `${Math.random() * 100}%`,
            fontSize: `${particle.size}px`,
          }}
          initial={{ y: 100, opacity: 0, rotate: 0 }}
          animate={{ 
            y: -100, 
            opacity: [0, 0.5, 0],
            rotate: 360 
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear"
          }}
        >
          {String.fromCharCode(65 + Math.floor(Math.random() * 26))}
        </motion.div>
      ))}

      {/* Pulsing background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent"
        variants={backgroundPulseVariants}
        animate="pulse"
      />

      {/* Glitch effect background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/80 to-transparent z-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Main container with stagger animation */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="text-center pt-6"
        >
          {/* Copyright line with typing animation */}
          <motion.div
            variants={itemVariants}
            className="font-mono text-green-400 text-sm mb-4"
          >
            <motion.span
              variants={typingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-blue-400"
            >
              visitor@portfolio
            </motion.span>
            <span>:</span>
            <motion.span
              variants={typingVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-yellow-400"
            >
              ~
            </motion.span>
            <span>$ echo "</span>
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5,
                delay: 0.4,
                type: "spring",
                stiffness: 200
              }}
              viewport={{ once: true }}
              className="text-white"
            >
              © {currentYear} Zakariae Alliouate
            </motion.span>
            <span>"</span>
            
            {/* Blinking cursor after command */}
            <motion.span
              variants={cursorVariants}
              animate="blinking"
              className="ml-1 text-green-400"
            >
              _
            </motion.span>
          </motion.div>

          {/* Final message with wave animation */}
          <motion.div
            variants={itemVariants}
            className="text-gray-500 text-xs font-mono"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6,
                delay: 0.6,
                type: "spring",
                stiffness: 300
              }}
              viewport={{ once: true }}
              className="inline-block"
            >
              $ _ Thank you for visiting!
            </motion.span>
          </motion.div>
        </motion.div>
      </div> 
      {/* Animated gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500/50 to-transparent"
        variants={gradientLineVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      />

      {/* Scan line effect */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-green-400/20"
        initial={{ y: -10 }}
        animate={{ y: "100vh" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear"
        }}
      />
    </footer>
  );
}