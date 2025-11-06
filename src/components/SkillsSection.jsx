import React from "react";
import { motion } from "framer-motion";

// Skill categories
const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Redux", "Tailwind CSS", "HTML", "CSS", "JavaScript"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python", "Django", "REST APIs"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "SQL", "PostgreSQL", "Firebase"],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "GitHub", "Docker", "CI/CD", "Vite"],
  },
];

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.2 } 
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: "spring", stiffness: 80, damping: 12 } 
  },
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-5">
        {/* Section Title */}
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Skills
        </motion.h2>

        {/* Skills Categories */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skillCategories.map((cat) => (
            <motion.div
              key={cat.category}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}
            >
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                {cat.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-indigo-200 cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
