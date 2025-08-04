import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 },
};

const slideInLeft = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

const slideInRight = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
};

export const Education = () => {
  const educationData = [
    {
      id: 1,
      degree: "BSC  in Management Information System - (UGC Approved)",
      institution: "NSBM Green University - Sri Lanka",
      period: "Current",
      status: "Current GPA: 3.21",
      description: "Pursuing Bachelor's degree in Information system with focus on software development, cloud solutions, and modern web technologies.",
      direction: "left"
    },
    {
      id: 2,
      degree: "G.C.E. O/L and A/L Examination",
      institution: "St.Anthony's College - Kandy, Sri Lanka",
      period: "2007 - 2020",
      status: "Physical Science Stream (Result - SSS)",
      description: "Completed Advanced Level education in Physical Science stream with Good results in Chemistry, Physics, and Biology.",
      direction: "right"
    }
  ];

  return (
    <motion.section
      id="education"
      className="education"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div className="education-header" variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }}>
        <h2>Educational Journey</h2>
        <p>Developing skills through continuous growth, education, and academic achievement</p>
      </motion.div>

      <div className="education-timeline">
        <div className="timeline-line"></div>
        
        {educationData.map((education, index) => (
          <motion.div
            key={education.id}
            className={`timeline-item ${education.direction}`}
            variants={education.direction === "left" ? slideInLeft : slideInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
          >
            <div className="timeline-dot">
              <div className="dot-inner"></div>
            </div>
            
            <motion.div
              className="education-content"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(97, 244, 255, 0.1)",
                transition: { duration: 0.3 }
              }}
            >
              <div className="education-header-content">
                <h3>{education.degree}</h3>
                <span className="education-status">{education.status}</span>
              </div>
              
              <div className="education-meta">
                <h4>{education.institution}</h4>
                <span className="education-period">{education.period}</span>
              </div>
              
              <p className="education-description">{education.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};
