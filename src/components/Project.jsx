import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import pollingAppImage from "../assets/polling-app.png";
import wasteManagementImage from "../assets/Waste-management.png";
import inventoryManagementImage from "../assets/Inventry-management.png";
import jobAppImage from "../assets/jobapp.jpg";
import weatherAppImage from "../assets/weatherapp.png";
import travelPlanImage from "../assets/travel-plan.png";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const handleGitHubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const projectsData = [
    {
      id: 1,
      title: "Travel Plan Platform",
      description: "AI-powered travel planning platform for Sri Lanka tourism with a provider marketplace. Built with a scalable microservices architecture and modern tech stack for optimal performance.",
      tech: ["Next.js", "Spring Boot", "Java 21", "Supabase", "AWS ECS"],
      category: "personal",
      github: "https://github.com/jmbrathnayke/travel-plan-platform",
      live: "https://travel-plan.live/",
      image: travelPlanImage
    },
    {
      id: 2,
      title: "Inventory Management system",
      description: "Using Flask API and React frontend, a complete inventory management system was created that includes low stock alerts, purchase/sales management, real-time stock tracking, a business intelligence dashboard, and a modular architecture that supports a fully responsive user interface.",
      tech: ["React", "Flask", "TailwindCSS", "Sql Server", "Chart.js"],
      category: "personal",
      github: "https://github.com/jmbrathnayke/InventryManagementSystem",
      image: inventoryManagementImage
    },
    {
      id: 3,
      title: "Polling App Frontend",
      description: "Developed a responsive polling app frontend using React and Tailwind CSS with dynamic UI for poll creation and option selection.",
      tech: ["React.js", "OpenAI", "TailwindCSS", "MaterialUI"],
      category: "personal",
      github: "https://github.com/jmbrathnayke/Polling-app",
      image: pollingAppImage
    },
    {
      id: 4,
      title: "Waste Management System",
      description: "Developed a comprehensive Flutter mobile platform connecting residents, drivers, and city management through real-time location-aware waste collection services, featuring issue reporting, route management, vehicle tracking, special pickup requests, and administrative analytics dashboard.",
      tech: ["Flutter(dart)", "Firebase", "Google Map SDK", "Geolocator", "Provider Management"],
      category: "personal",
      github: "https://github.com/jmbrathnayke/Waste-Management-System",
      image: wasteManagementImage
    },
    {
      id: 5,
      title: "Job App CRUD",
      description: "This project is a CRUD application for managing job listings. It allows users to create, read, update, and delete job postings. The application is built using React for the frontend and Spring Boot for the backend.",
      tech: ["React", "Java", "PostgreSQL", "REST API", "Spring Boot"],
      category: "personal",
      github: "https://github.com/jmbrathnayke/Job-app-dashboard-crud",
      image: jobAppImage
    },
    {
      id: 6,
      title: "Live Weather App",
      description: "Developed a live weather application with real-time data fetching, implementing authentication and authorization for secure access. Built the frontend using React and Tailwind CSS with a dynamic UI for weather information display, and developed the backend with Node.js and Express.js.",
      tech: ["React.js", "WeatherAPI", "TailwindCSS", "MaterialUI", "Node.js", "Express.js", "Axios"],
      category: "personal",
      github: "https://github.com/jmbrathnayke/Weather-Application",
      image: weatherAppImage
    }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeFilter);

  return (
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>

      {/* Filter Tabs */}
      <div className="skills-filter" style={{ marginBottom: '3rem', justifyContent: 'center', display: 'flex' }}>
        <button 
          className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
          onClick={() => setActiveFilter("all")}
        >
          All
        </button>
        <button 
          className={`filter-btn ${activeFilter === "worked" ? "active" : ""}`}
          onClick={() => setActiveFilter("worked")}
        >
          Worked/Office Projects
        </button>
        <button 
          className={`filter-btn ${activeFilter === "personal" ? "active" : ""}`}
          onClick={() => setActiveFilter("personal")}
        >
          Personal Projects
        </button>
      </div>

      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        layout
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                className="project-card"
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                onClick={() => handleGitHubClick(project.github)}
                style={{ cursor: 'pointer' }}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="project-image"
                  style={{
                    backgroundImage: `url(${project.image})`,
                  }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.live && (
                    <button
                      className="github-link"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleGitHubClick(project.live);
                      }}
                      style={{ 
                        background: 'none', 
                        cursor: 'pointer',
                        color: 'inherit',
                        padding: '0.5rem 1rem',
                        borderRadius: '25px',
                        border: '2px solid rgba(255, 255, 255, 0.3)',
                        transition: 'all 0.3s ease',
                        marginRight: '10px'
                      }}
                    >
                      <i className="fas fa-external-link-alt" style={{ marginRight: '8px' }}></i>
                      <span>Live Site</span>
                    </button>
                  )}
                  <button
                    className="github-link"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleGitHubClick(project.github);
                    }}
                    style={{ 
                      background: 'none', 
                      cursor: 'pointer',
                      color: 'inherit',
                      padding: '0.5rem 1rem',
                      borderRadius: '25px',
                      border: '2px solid rgba(255, 255, 255, 0.3)',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <svg className="github-icon" viewBox="0 0 24 24" fill="currentColor" style={{ width: '20px', height: '20px', marginRight: '8px' }}>
                      <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <span>View Code</span>
                  </button>
                </div>
              </motion.div>
            ))
          ) : (
            <motion.div 
              className="no-projects-placeholder"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              style={{
                gridColumn: '1 / -1',
                textAlign: 'center',
                padding: '3rem 2rem',
                background: 'var(--card-bg)',
                borderRadius: '1rem',
                border: '1px solid var(--card-border)',
                color: 'var(--light-text)',
                maxWidth: '600px',
                margin: '2rem auto'
              }}
            >
              <i className="fas fa-lock" style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--text-color)', display: 'block' }}></i>
              <h3 style={{ marginBottom: '0.5rem', color: 'var(--text-color)' }}>Confidential Projects</h3>
              <p>
                My professional and office work projects at Itexphere Solutions Pvt Ltd are confidential under NDA (Non-Disclosure Agreement). Details about my roles, responsibilities, and technical contributions can be discussed during an interview or provided upon request.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.section>
  );
};
