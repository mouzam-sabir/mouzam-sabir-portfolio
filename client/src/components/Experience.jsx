import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const jobs = [
  {
    current: false,
    badge: "",
    date: "Completed (3 months)",
    role: "DevOps Intern",
    company: "ASTP under PITB",
    desc: "Worked on implementing continuous integration and deployment pipelines, automating workflows, and learning infrastructure best practices within a professional IT environment.",
  },
  {
    current: false,
    date: "Completed (3 months)",
    role: "Offensive Security Intern",
    company: "IT Solera",
    desc: "Gained hands-on experience in identifying vulnerabilities, performing security assessments, and understanding the core principles of cyber defense and offensive strategies.",
  },
];

export default function Experience() {
  return (
    <section className="section" id="experience">
      <div className="container">
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Career
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Work Experience
        </motion.h2>

        <div className="timeline">
          {jobs.map((job, i) => (
            <motion.div
              className={`timeline-item${job.current ? " current" : ""}`}
              key={job.role}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
            >
              {job.badge && <span className="timeline-badge">{job.badge}</span>}
              <p className="timeline-date">{job.date}</p>
              <h3 className="timeline-role">{job.role}</h3>
              <p className="timeline-company">{job.company}</p>
              <p className="timeline-desc">{job.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
