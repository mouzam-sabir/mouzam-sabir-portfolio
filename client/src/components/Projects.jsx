import { motion } from "framer-motion";
import { FiExternalLink, FiGithub } from "react-icons/fi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const projects = [
  {
    title: "Dockerized Login Application",
    description:
      "A complete containerized application utilizing Docker networks and persistent volumes. Features a Flask backend, MySQL database, and Nginx reverse proxy running on Ubuntu.",
    features: [
      "Custom Docker images via Dockerfiles",
      "Orchestration with Docker Compose",
      "Docker network: devops-net",
      "Persistent MySQL volume for data retention",
    ],
    tech: [
      "Flask",
      "MySQL",
      "Nginx",
      "Ubuntu",
      "Docker",
      "Docker Compose",
      "Python",
    ],
    github: "https://github.com/mouzam-sabir/",
    live: null,
  },
  {
    title: "Linux Server Health Monitoring",
    description:
      "An automated Bash script utilizing cron jobs to monitor server health, particularly CPU usage, with real-time Slack webhook integrations for alerts and recovery notifications.",
    features: [
      "Threshold-based CPU monitoring",
      "Top CPU process detection",
      "Slack Webhook integration",
      "Recovery alerts functionality",
    ],
    tech: [
      "Bash",
      "Linux",
      "Cron",
      "Slack Webhook",
    ],
    github: "https://github.com/mouzam-sabir/",
    live: null,
  },
];

export default function Projects() {
  return (
    <section className="section" id="projects">
      <div className="container">
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Projects
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Featured Work
        </motion.h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <motion.div
              className="project-card"
              key={project.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className="project-header">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FiGithub size={20} />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live Demo"
                    >
                      <FiExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>

              <p className="project-desc">{project.description}</p>

              <ul className="project-features">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="project-tech">
                {project.tech.map((t) => (
                  <span className="skill-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
