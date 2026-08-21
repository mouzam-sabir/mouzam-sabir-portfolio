import { motion, AnimatePresence } from "framer-motion";
import { FaCertificate, FaTimes } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

const certifications = [
  {
    title: "Google Cybersecurity Professional",
    provider: "Coursera",
    image: "/certificates/Google Cybersecurity.png",
  },
  {
    title: "Foundations of Cybersecurity",
    provider: "Coursera",
    image: "/certificates/Foundations of Cybersecurity.png",
  },
  {
    title: "Play It Safe: Manage Security Risks",
    provider: "Coursera",
    image: "/certificates/Play It Safe Manage Security Risks.png",
  },
  {
    title: "Connect and Protect: Networks and Network Security",
    provider: "Coursera",
    image: "/certificates/Connect and Protect Networks and Network.png",
  },
  {
    title: "Tools of the Trade: Linux and SQL",
    provider: "Coursera",
    image: "/certificates/Tools of the Trade Linux and SQL.png",
  },
  {
    title: "Assets, Threats, and Vulnerabilities",
    provider: "Coursera",
    image: "/certificates/Assets, Threats, and Vulnerabilities.png",
  },
  {
    title: "Sound the Alarm: Detection and Response",
    provider: "Coursera",
    image: "/certificates/Sound the Alarm Detection and Response.png",
  },
  {
    title: "Automate Cybersecurity Tasks with Python",
    provider: "Coursera",
    image: "/certificates/Automate Cybersecurity Tasks with Python.png",
  },
  {
    title: "Put It to Work: Prepare for Cybersecurity Jobs",
    provider: "Coursera",
    image: "/certificates/Put It to Work Prepare for Cybersecurity Jobs.png",
  },
  {
    title: "Introduction to Shell Scripting for DevOps",
    provider: "Coursera",
    image: "/certificates/Introduction to Shell Scripting for DevOps.png",
  },
  {
    title: "Linux I/O Redirection for DevOps",
    provider: "Coursera",
    image: "/certificates/Linux IO Redirection for DevOps.png",
  },
  {
    title: "Getting Started with Cisco Packet Tracer",
    provider: "Cisco",
    image: "/certificates/Getting Started with Cisco Packet Tracer.png",
  },
  {
    title: "Networking Basics",
    provider: "Cisco",
    image: "/certificates/Networking Basics.png",
  },
  {
    title: "Network Support and Security",
    provider: "Cisco",
    image: "/certificates/Network Support and Security.png",
  },
  {
    title: "SOC Fundamentals",
    provider: "Coursera",
    image: "/certificates/SOC Fundamentals.png",
  },
  {
    title: "Accelerate Your Job Search with AI",
    provider: "Coursera",
    image: "/certificates/Accelerate Your Job Search with AI.png",
  },
  {
    title: "CCSP",
    provider: "Certification",
    image: "/certificates/CCSP.PNG",
  },
];

export default function Certifications() {
  const [selectedCert, setSelectedCert] = useState(null);

  const closeModal = useCallback(() => setSelectedCert(null), []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    if (selectedCert) {
      document.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedCert, closeModal]);

  return (
    <section className="section" id="certifications">
      <div className="container">
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Continuous Learning
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Certifications
        </motion.h2>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <motion.div
              className="edu-card cert-card"
              key={cert.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={i % 6}
              onClick={() => setSelectedCert(cert)}
              role="button"
              tabIndex={0}
              aria-label={`View certificate: ${cert.title}`}
              onKeyDown={(e) => e.key === "Enter" && setSelectedCert(cert)}
              style={{ cursor: "pointer" }}
            >
              <div className="edu-icon">
                <FaCertificate color="#60a5fa" />
              </div>
              <h3 className="edu-degree cert-title" style={{ marginTop: "1rem" }}>
                {cert.title}
              </h3>
              <p className="edu-school">{cert.provider}</p>
              <p className="cert-view-hint">Click to view</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            className="cert-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeModal}
            role="dialog"
            aria-modal="true"
            aria-label={selectedCert.title}
          >
            <motion.div
              className="cert-modal-content"
              initial={{ opacity: 0, scale: 0.88, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 30 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="cert-modal-close"
                onClick={closeModal}
                aria-label="Close certificate preview"
              >
                <FaTimes />
              </button>
              <p className="cert-modal-title">{selectedCert.title}</p>
              <p className="cert-modal-provider">{selectedCert.provider}</p>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="cert-modal-img"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
