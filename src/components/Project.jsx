import { motion } from "framer-motion";
import pollingAppImage from "../assets/polling-app.png";
import stopwatchImage from "../assets/stopwatch.png";
import wasteManagementImage from "../assets/Waste-management.png";
import inventoryManagementImage from "../assets/Inventry-management.png";

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
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
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
          
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
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
          
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
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
          
        </motion.div>
      </motion.div>
    </motion.section>
  );
};
