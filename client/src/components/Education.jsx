import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const education = [
  {
    date: "Graduated",
    degree: "BS Cyber Security",
    school: "University of Management and Technology",
  },
  {
  date: "Completed",
  degree: "Intermediate (ICS)",
  school: "Punjab Group of Colleges",
}
];

export default function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Education
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Academic Background
        </motion.h2>

        <div className="edu-cards">
          {education.map((edu, i) => (
            <motion.div
              className="edu-card"
              key={edu.degree}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              custom={i}
            >
              <div className="edu-icon">
                <FaGraduationCap color="#60a5fa" />
              </div>
              <p className="edu-date">{edu.date}</p>
              <h3 className="edu-degree">{edu.degree}</h3>
              <p className="edu-school">{edu.school}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
