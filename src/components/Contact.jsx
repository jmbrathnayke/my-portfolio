import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false,
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setFormStatus({
      submitting: true,
      success: false,
      error: false,
      message: "",
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          to_name: "Manujaya",
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      setFormStatus({
        submitting: false,
        success: true,
        error: false,
        message: "Message sent successfully!",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFormStatus({
        submitting: false,
        success: false,
        error: true,
        message: "Failed to send message. Please try again.",
      });
    }
  };

  return (
    <motion.section
      id="contact"
      className="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        viewport={{ once: true }}
      >
        Let's Connect
      </motion.h2>

      <motion.div 
        className="contact-container"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div className="contact-info" variants={fadeInUp}>
          <p className="contact-description">
            Feel free to reach out to discuss collaborations or opportunities.
          </p>
          
          <div className="contact-details">
            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="contact-icon">
                <i className="fas fa-envelope"></i>
              </div>
              <div className="contact-text">
                <a href="mailto:janithrathnayake01@gmail.com">janithrathnayake01@gmail.com</a>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="contact-icon">
                <i className="fas fa-phone"></i>
              </div>
              <div className="contact-text">
                <a href="tel:+94767191265">+94 76 7191 265</a><br />
                 <a href="tel:+94714790447">+94 71 4790 447</a>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="contact-icon">
                <i className="fab fa-linkedin"></i>
              </div>
              <div className="contact-text">
                <a href="https://www.linkedin.com/in/manujaya-rathnayake-9549a727a/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/manujaya-rathnayake
                </a>
              </div>
            </motion.div>

            <motion.div className="contact-item" variants={fadeInUp}>
              <div className="contact-icon">
                <i className="fab fa-github"></i>
              </div>
              <div className="contact-text">
                <a href="https://github.com/jmbrathnayke" target="_blank" rel="noopener noreferrer">
                  github.com/jmbrathnayke
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div className="contact-content" variants={fadeInUp}>
        <motion.form className="contact-form" onSubmit={handleSubmit}>
          <motion.input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <motion.input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <motion.input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />
          <motion.textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            required
            whileFocus={{ scale: 1.02 }}
            onChange={handleInputChange}
          />

          <motion.button
            className="submit-btn"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={formStatus.submitting}
          >
            {formStatus.submitting ? "Sending..." : "Send Message"}
          </motion.button>

          {formStatus.message && (
            <motion.div
              className={`form-status ${
                formStatus.success ? "success" : "error"
              } `}
            >
              {formStatus.message}
            </motion.div>
          )}
        </motion.form>
      </motion.div>
      </motion.div>
    </motion.section>
  );
};
