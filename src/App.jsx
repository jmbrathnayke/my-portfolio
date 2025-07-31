import "./App.css";
import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { Projects } from "./components/Project";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <div className={`app ${isLoaded ? "loaded" : ""}`}>
      <Navbar />

      <About />
      <Projects />
      <Education />
      <Skills />
      <Contact />

      <motion.footer
        className="footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p> &copy; 2025 PedroTech. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}

export default App;
