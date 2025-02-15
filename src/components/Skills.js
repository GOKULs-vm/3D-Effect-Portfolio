import React from "react";
import "./Skills.css";
import { motion } from "framer-motion";

// Animation Variants
const skillsContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }, // Stagger effect for skills
  },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 },
  },
};

const Skills = () => {
  return (
    <motion.div
      className="skills-section"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.h2 variants={skillsContainer}>Skills</motion.h2>
      <motion.p variants={skillsContainer}>These are my technical skills.</motion.p>

      <motion.div className="skills-container" variants={skillsContainer}>
        <motion.div className="skills-list">
          {["React.js", "Bootstrap", "JavaScript", "HTML & CSS", "MongoDB", "Node.js"].map(
            (skill, index) => (
              <motion.div key={index} className="skill-card" variants={skillVariants}>
                {skill}
              </motion.div>
            )
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
