import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import myImage from "../assets/my-image.jpg";
import fullStackImage from "../assets/full-stack-dev.png";
import resumePDF from "../assets/Manujaya_Rathnayake_Resume.pdf";

export const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      badge: "👋 Hello, I'm",
      headline: "Manujaya Rathnayake",
      subtitle: "Aspiring Software Engineer",
      description: "As a Software Engineering Intern at Itexphere Solutions Pvt Ltd and a final year Management Information Systems student, I have hands-on experience in scalable software development and proposed smart solutions.",
      image: myImage,
      isProfile: true
    },
    {
      badge: "💻 Full-Stack Development",
      headline: "Full-Stack & Mobile Developer",
      subtitle: "Building Scalable Digital Solutions",
      description: "Specialized in creating robust backend services with Spring Boot and Node.js, responsive web frontends with React and Next.js, and location-aware cross-platform mobile apps with Flutter.",
      image: fullStackImage,
      isProfile: false
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleDownloadCV = async () => {
    try {
      const cacheBuster = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
      const downloadUrl = `${resumePDF}?v=${cacheBuster}&nocache=true&_=${Date.now()}`;

      const response = await fetch(downloadUrl, { method: 'HEAD' });
      if (!response.ok) {
        throw new Error('Resume file not found');
      }

      const link = document.createElement('a');
      link.href = downloadUrl;
      link.download = 'Manujaya_Rathnayake_Resume.pdf';
      link.target = '_blank';
      link.rel = 'noopener noreferrer';

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      console.log('Resume download initiated successfully');
    } catch (error) {
      console.error('Error downloading resume:', error);
      window.open(resumePDF, '_blank');
    }
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
        {/* Left Side: Animated Text Slide */}
        <div className="hero-content" style={{ minHeight: '420px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
              >
                <div className="hero-badge">
                  <span>{slides[currentSlide].badge}</span>
                </div>
                <h1 className="glitch">{slides[currentSlide].headline}</h1>
                <h2 className="hero-subtitle">{slides[currentSlide].subtitle}</h2>
                <p className="hero-description">{slides[currentSlide].description}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="cta-buttons">
            <a href="#projects" className="cta-primary">
              View My Work
            </a>
            <button className="cta-secondary" onClick={handleDownloadCV}>
              Download CV
            </button>
          </div>

          <div className="social-links">
            <a href="https://github.com/jmbrathnayke" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/manujaya-rathnayake-9549a727a/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/share/19uJjGsgX5/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://medium.com/@janithrathnayake01" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-medium"></i>
            </a>
          </div>

          {/* Slider Navigation Controls */}
          <div className="slider-controls">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="slider-arrow prev-arrow"
              aria-label="Previous slide"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <div className="slider-dots" style={{ display: 'flex', gap: '0.6rem' }}>
              {slides.map((_, idx) => (
                <button
                  key={idx}
                  className={`slider-dot ${currentSlide === idx ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(idx)}
                  style={{
                    width: currentSlide === idx ? '20px' : '8px',
                    height: '8px',
                    borderRadius: '50px',
                    background: currentSlide === idx ? 'var(--accent-color)' : 'rgba(0,0,0,0.12)',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="slider-arrow next-arrow"
              aria-label="Next slide"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Right Side: Animated Image Slide */}
        <div className="hero-image-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
            >
              {slides[currentSlide].isProfile ? (
                <div className="profile-image-wrapper">
                  <div className="image-glow" />
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].headline}
                    className="profile-image"
                  />
                  <div className="image-border" />
                </div>
              ) : (
                <div className="slider-graphic-wrapper">
                  <img
                    src={slides[currentSlide].image}
                    alt={slides[currentSlide].headline}
                    className="slider-graphic"
                  />
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          <br /><br /><br />
          <br /><br /><br />
          <motion.div
            className="floating-card"
            animate={{ y: [0, -10, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="card-content">
              <span className="card-icon">💻</span>
              <span className="card-text">
                Currently working on something awesome!
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
