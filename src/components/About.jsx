import { motion } from "framer-motion";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import myImage from "../assets/my-image.jpg";
import resumePDF from "../assets/Manujaya rathnayake resume.pdf";

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

export const About = () => {
  const handleDownloadCV = () => {
    // Enhanced cache-busting with multiple parameters and force refresh
    const link = document.createElement('a');
    const cacheBuster = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    link.href = `${resumePDF}?v=${cacheBuster}&nocache=true&_=${Date.now()}`;
    link.download = 'Manujaya_Rathnayake_Resume.pdf';
    link.target = '_blank'; // Open in new tab to bypass cache
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      id="home"
      className="hero"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hero-container">
        <motion.div
          className="hero-content"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.div className="hero-badge">
            <span> 👋 Hello, I'm </span>
          </motion.div>
          <motion.h1
            className="glitch"
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
          >
            Manujaya Rathnayake
          </motion.h1>
          <motion.h2 className="hero-subtitle" variants={fadeInUp}>
            {" "}
            Aspiring Software Engineer 
          </motion.h2>
          <motion.p className="hero-description" variants={fadeInUp}>
            I am third year Management Information Systems student with a strong interest for software engineering and developing scalable
            mobile and fullstack applications. I’m Strong in communication, problem solving, leadership, teamwork, and adaptability. 
            I’m looking for now an internship opportunity to utilize and improve technical capabilities in innovative, agile, collaborative settings
          </motion.p>

          <motion.div className="cta-buttons" variants={staggerContainer}>
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {" "}
              View My Work
            </motion.a>
            <motion.button
              className="cta-secondary"
              onClick={handleDownloadCV}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.button>
          </motion.div>
          <motion.div className="social-links" variants={staggerContainer}>
            <motion.a href="https://github.com/jmbrathnayke" target="_blank">
              <i className="fab fa-github"> </i>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/manujaya-rathnayake-9549a727a/" target="_blank">
              <i className="fab fa-linkedin"> </i>
            </motion.a>
            <motion.a href="https://www.facebook.com/share/19uJjGsgX5/" target="_blank">
              <i className="fab fa-facebook"> </i>
            </motion.a>
            <motion.a href="https://medium.com/@janithrathnayake01" target="_blank">
              <i className="fab fa-medium"> </i>
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.div
            className="profile-image-wrapper"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <motion.div 
              className="image-glow"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3] 
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
            />
            <motion.img 
              src={myImage} 
              alt="Manujaya Rathnayake" 
              className="profile-image"
              whileHover={{ 
                rotate: [0, 2, -2, 0],
                transition: { duration: 0.5 }
              }}
            />
            <motion.div 
              className="image-border"
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            />
          </motion.div>

          <br /><br /><br />
          <br /><br /><br />
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon"> 💻 </span>
              <span className="card-text">
                {" "}
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};
