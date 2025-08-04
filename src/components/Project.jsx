import { motion } from "framer-motion";
import pollingAppImage from "../assets/polling-app.png";
import wasteManagementImage from "../assets/Waste-management.png";
import inventoryManagementImage from "../assets/Inventry-management.png";
import jobAppImage from "../assets/jobapp.jpg";
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
  const handleGitHubClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

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
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        {/* Polling App Project */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => handleGitHubClick('https://github.com/jmbrathnayke/Polling-app')}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: `url(${pollingAppImage})` }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <h3>Polling App Frontend</h3>
          <p>
            Developed a responsive polling app frontend using React and Tailwind CSS with dynamic UI for poll creation and option selection.
          </p>
          <div className="project-tech">
            <span>React.js</span>
            <span>OpenAI</span>
            <span>TailwindCSS</span>
            <span>MaterialUI</span>
          </div>
          <div className="project-links">
            <button
              className="github-link"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                handleGitHubClick('https://github.com/jmbrathnayke/Polling-app');
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
        

        {/* Waste Management Project */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => handleGitHubClick('https://github.com/jmbrathnayke/Waste-Management-System')}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: `url(${wasteManagementImage})`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Waste Management System</h3>
          <p>
           Developed a comprehensive Flutter mobile platform connecting residents, drivers, and city management through real-time location-aware waste collection services, featuring issue reporting, route management, vehicle tracking, special pickup requests, and administrative analytics dashboard.
          </p>
          <div className="project-tech">
            <span>Flutter(dart)</span>
            <span>Firebase</span>
            <span>Google Map SDK</span>
            <span>Geolocator</span>
            <span>Provider Management</span>
          </div>
          <div className="project-links">
            <button
              className="github-link"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                handleGitHubClick('https://github.com/jmbrathnayke/Waste-Management-System');
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
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View Code</span>
            </button>
          </div>
        </motion.div>

        {/* Inventory Management Project */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => handleGitHubClick('https://github.com/jmbrathnayke/InventryManagementSystem')}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: `url(${inventoryManagementImage})`,
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Inventory Management system</h3>
          <p>
            Using Flask API and React frontend, a complete inventory management system was created that includes low stock alerts, purchase/sales management, real-time stock tracking, a business intelligence dashboard, and a modular architecture that supports a fully responsive user interface.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Flask</span>
            <span>TailwindCSS</span>
            <span>Sql Server</span>
            <span>Chart.js</span>
          </div>
          <div className="project-links">
            <button
              className="github-link"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                handleGitHubClick('https://github.com/jmbrathnayke/InventryManagementSystem');
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
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View Code</span>
            </button>
          </div>
        </motion.div>

        {/* New Project - You can customize this */}
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
          onClick={() => handleGitHubClick('https://github.com/jmbrathnayke/Job-app-dashboard-crud')}
          style={{ cursor: 'pointer' }}
        >
          <motion.div
            className="project-image"
            style={{
              backgroundImage: `url(${jobAppImage})`
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          />
          <h3>Job App CRUD</h3>
          <p>
            This project is a CRUD application for managing job listings. It allows users to create, read, update, and delete job postings. The application is built using React for the frontend and Spring Boot for the backend.
          </p>
          <div className="project-tech">
            <span>React</span>
            <span>Java</span>
            <span>PostgreSQL</span>
            <span>REST API</span>
            <span>Spring Boot</span>
          </div>
          <div className="project-links">
            <button
              className="github-link"
              onClick={(e) => {
                e.stopPropagation(); // Prevent card click
                handleGitHubClick('https://github.com/jmbrathnayke/Job-app-dashboard-crud'); // Change to your project repo
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
                <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              <span>View Code</span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
