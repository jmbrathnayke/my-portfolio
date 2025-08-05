import { motion } from "framer-motion";
import { useState } from "react";

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

const progressVariants = {
  initial: { width: 0 },
  animate: { width: "var(--progress-width)" },
  transition: { duration: 1.5, ease: "easeOut" },
};

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const technicalSkills = [
    { name: "React.js", level: 75, icon: "⚛️", category: "Frontend" },
    { name: "JavaScript", level: 75, icon: "｡🇯‌🇸‌", category: "Language" },
    { name: "Html", level: 90, icon: "</>", category: "Frontend" },
    { name: "C", level: 90, icon: "©", category: "Language" },
    { name: "Java", level: 70, icon: "♨️", category: "Language" },
    { name: "SQL", level: 85, icon: "🗄️", category: "Database" },
    { name: "Git/GitHub", level: 88, icon: "📱", category: "Tools" },
    { name: "CSS/SCSS", level: 82, icon: "🎨", category: "Frontend" },
    { name: "Spring Boot", level: 78, icon: "🟢", category: "Backend" },
    { name: "Flutter(dart)", level: 73, icon: "🔷", category: "Mobile" },
    { name: "Firebase", level: 65, icon: "🔥", category: "Backend" },
    { name: "PostmanAPI", level: 70, icon: "🚀", category: "Tools" },
    { name: "Azure(currently learning)", level: 20, icon: "☁️", category: "Cloud" },
    { name: "vscode", level: 80, icon: "🖥️", category: "Tools" },
    { name: "Intelij", level: 80, icon: "🖥️", category: "Tools" },
  ];

  const skillCategories = ['All', 'Language', 'Frontend', 'Backend', 'Mobile', 'Database', 'Tools', 'Cloud'];

  const filteredSkills = activeFilter === 'All' 
    ? technicalSkills 
    : technicalSkills.filter(skill => skill.category === activeFilter);

  const softSkills = [
    { name: "Problem Solving", description: "Analytical thinking and creative solutions", icon: "🧩" },
    { name: "Team Collaboration", description: "Effective communication and teamwork", icon: "🤝" },
    { name: "Leadership", description: "Project management and team guidance", icon: "👑" },
    { name: "Adaptability", description: "Quick learning and flexibility", icon: "🔄" },
    { name: "Critical Thinking", description: "Strategic analysis and decision making", icon: "🎯" },
    { name: "Time Management", description: "Efficient project planning and execution", icon: "⏰" },
    { name: "Communication", description: "Clear technical and non-technical communication", icon: "💬" },
    { name: "Creativity", description: "Innovative approaches and design thinking", icon: "💡" }
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
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="skills-section-header">
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

          <div className="technical-grid">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="tech-skill-card"
                variants={skillCardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(97, 244, 255, 0.15)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h4>{skill.name}</h4>
                  <div className="skill-progress-container">
                    <motion.div
                      className="skill-progress-bar"
                      style={{ "--progress-width": `${skill.level}%` }}
                      variants={progressVariants}
                      initial="initial"
                      whileInView="animate"
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                    />
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills Section */}
        <motion.div
          className="soft-skills"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="skills-section-header">
            <h3>
              <span className="section-icon">💡</span>
              Soft Skills
            </h3>
            <p>Personal qualities and interpersonal skills</p>
          </div>

          <div className="soft-skills-grid">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="soft-skill-card"
                variants={skillCardVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(89, 0, 141, 0.2)",
                  transition: { duration: 0.3 }
                }}
              >
                <div className="soft-skill-icon">{skill.icon}</div>
                <div className="soft-skill-content">
                  <h4>{skill.name}</h4>
                  <p>{skill.description}</p>
                </div>
                <div className="skill-glow"></div>
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
        transition={{ duration: 0.8, delay: 0.5 }}
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
