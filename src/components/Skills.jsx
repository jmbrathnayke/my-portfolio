import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import nextjsImage from "../assets/nextjs.png";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const skillCardVariants = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6 },
};

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const technicalSkills = [
    { name: "React.js", icon: "fab fa-react", category: "Frontend" },
    { name: "Next.js", icon: nextjsImage, isImage: true, category: "Frontend" },
    { name: "JavaScript", icon: "fab fa-js", category: "Language" },
    { name: "HTML", icon: "fab fa-html5", category: "Frontend" },
    { name: "C", icon: "fas fa-code", category: "Language" },
    { name: "Java", icon: "fab fa-java", category: "Language" },
    { name: "SQL", icon: "fas fa-database", category: "Database" },
    { name: "Neon", icon: "fas fa-database", category: "Database" },
    { name: "Git/GitHub", icon: "fab fa-git-alt", category: "Tools" },
    { name: "CSS/SCSS", icon: "fab fa-css3-alt", category: "Frontend" },
    { name: "Spring Boot", icon: "fas fa-leaf", category: "Backend" },
    { name: "Node.js", icon: "fab fa-node-js", category: "Backend" },
    { name: "Express.js", icon: "fas fa-server", category: "Backend" },
    { name: "Supabase", icon: "fas fa-bolt", category: "Backend" },
    { name: "Flutter(dart)", icon: "fas fa-mobile-alt", category: "Mobile" },
    { name: "Firebase", icon: "fas fa-fire", category: "Backend" },
    { name: "PostmanAPI", icon: "fas fa-paper-plane", category: "Tools" },
    { name: "AWS", icon: "fab fa-aws", category: "Cloud" },
    { name: "Azure", icon: "fab fa-microsoft", category: "Cloud" },
    { name: "VS Code", icon: "fas fa-laptop-code", category: "Tools" },
    { name: "Intellij", icon: "fas fa-terminal", category: "Tools" },
  ];

  const skillCategories = ['All', 'Language', 'Frontend', 'Backend', 'Mobile', 'Database', 'Tools', 'Cloud'];

  const filteredSkills = activeFilter === 'All' 
    ? technicalSkills 
    : technicalSkills.filter(skill => skill.category === activeFilter);

  const softSkills = [
    { name: "Problem Solving", icon: "fas fa-puzzle-piece" },
    { name: "Team Collaboration", icon: "fas fa-users" },
    { name: "Leadership", icon: "fas fa-crown" },
    { name: "Adaptability", icon: "fas fa-sync-alt" },
    { name: "Critical Thinking", icon: "fas fa-bullseye" },
    { name: "Time Management", icon: "fas fa-clock" },
    { name: "Communication", icon: "fas fa-comments" },
    { name: "Creativity", icon: "fas fa-lightbulb" }
  ];

  return (
    <motion.section
      id="skills"
      className="skills"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="skills-header" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <h2>Skills & Expertise</h2>
        <p>Combining technical proficiency with essential soft skills for comprehensive development</p>
      </motion.div>

      <div className="skills-container">
        {/* Technical Skills Section */}
        <motion.div
          className="technical-skills"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ width: '100%' }}
        >
          <div className="skills-section-header" style={{ textAlign: 'center' }}>
            <h3>
              <span className="section-icon">💻</span>
              Technical Skills
            </h3>
            <p>Programming languages, frameworks, and tools</p>
          </div>

          {/* Filter Buttons */}
          <div className="skills-filter">
            {skillCategories.map((category) => (
              <motion.button
                key={category}
                className={`filter-btn ${activeFilter === category ? 'active' : ''}`}
                onClick={() => setActiveFilter(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div className="technical-grid" layout>
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="tech-skill-card"
                  variants={skillCardVariants}
                  initial="initial"
                  animate="animate"
                  exit={{ opacity: 0, scale: 0.8 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <div className="skill-icon-wrapper">
                    {skill.isImage ? (
                      <img 
                        src={skill.icon} 
                        alt={skill.name} 
                        style={{ 
                          width: '2.5rem', 
                          height: '2.5rem', 
                          borderRadius: '50%',
                          objectFit: 'contain'
                        }} 
                      />
                    ) : (
                      <i className={skill.icon}></i>
                    )}
                  </div>
                  <h4>{skill.name}</h4>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        {/* Soft Skills Section below */}
        <motion.div
          className="soft-skills-simple"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ width: '100%', marginTop: '4rem' }}
        >
          <div className="skills-section-header" style={{ textAlign: 'center' }}>
            <h3>
              <span className="section-icon">💡</span>
              Soft Skills
            </h3>
            <p>Personal qualities and interpersonal strengths</p>
          </div>

          <div className="soft-skills-simple-list">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="soft-skill-tag"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ 
                  scale: 1.05,
                  y: -2,
                  boxShadow: "0 5px 15px rgba(0, 0, 0, 0.05)"
                }}
              >
                <i className={skill.icon}></i>
                <span>{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Skills Summary */}
      <motion.div
        className="skills-summary"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="summary-stats">
          <div className="stat-item">
            <span className="stat-number">{technicalSkills.length}+</span>
            <span className="stat-label">Technical Skills</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">8+</span>
            <span className="stat-label">Soft Skills</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years Learning</span>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};
