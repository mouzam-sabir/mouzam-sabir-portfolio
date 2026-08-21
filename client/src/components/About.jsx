import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stats = [
  { number: "6+", label: "Months", subLabel: "Experience", labelAsNumber: true },
  { number: "BS Cyber Security", label: "Graduated" },
  { number: "DevOps", label: "Focus" },
  { number: "2", label: "Tech Domains" },
];

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            <p className="section-label">About Me</p>
            <h2 className="section-title">
              Building resilient
              <br />
              infrastructure.
            </h2>
            <div className="about-text">
              <p>
                I'm a DevOps-focused professional with a background in Cyber Security. I specialize in automation, building robust containerized environments, and orchestrating deployments using tools like Docker, Kubernetes, and GitLab CI/CD.
              </p>
              <p>
                With hands-on experience across internships in both DevOps and Offensive Security, I bring a practical, security-conscious mindset to every project — whether it's setting up automated monitoring, managing Linux servers, or paving the way towards a DevSecOps direction.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
          >
            {stats.map((s) => (
              <div className="stat" key={s.label}>
                <div className="stat-number">{s.number}</div>
                <div className={s.labelAsNumber ? "stat-number" : "stat-label"}>
                  {s.label}
                </div>
                {s.subLabel && <div className="stat-label">{s.subLabel}</div>}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
