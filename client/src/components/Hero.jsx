import { motion } from "framer-motion";
import { FiMail, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-scroll";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
};

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-inner">
          {/* Left — text */}
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            <h1>
              Muhammad Mouzam
              <br />
              Sabir
            </h1>
            <p className="hero-roles">
              <span className="gradient">DevOps Engineer</span> · Cyber Security · DevSecOps
            </p>
            <p className="hero-desc">
              I build and automate resilient infrastructure, streamline CI/CD pipelines, and implement secure deployment practices — turning complex operations into efficient systems.
            </p>
            <div className="hero-buttons">
              <Link to="contact" smooth duration={500} offset={-64}>
                <button className="btn btn-primary">
                  <FiMail size={16} />
                  Get in Touch
                </button>
              </Link>
              <a href="/mouzam-sabir-cv.pdf" download="mouzam-sabir-cv.pdf">
                <button className="btn btn-outline">
                  <FiDownload size={16} />
                  Download CV
                </button>
              </a>
              <a
                href="https://www.linkedin.com/in/mouzam-sabirr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline">
                  <FaLinkedin size={16} />
                  LinkedIn
                </button>
              </a>
              <a
                href="https://github.com/mouzam-sabir/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="btn btn-outline">
                  <FaGithub size={16} />
                  GitHub
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right — profile picture */}
          <motion.div
            className="hero-image-wrap"
            initial="hidden"
            animate="visible"
            variants={fadeLeft}
          >
            <div className="hero-image-ring">
              <img
                src="profile.png"
                alt="Muhammad Mouzam Sabir"
                className="hero-image"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              <div className="hero-image-placeholder">
                <span>MS</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
