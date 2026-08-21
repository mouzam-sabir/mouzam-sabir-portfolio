import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiSend } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const links = [
  {
    icon: <FiMail />,
    label: "mouzamsabirr@gmail.com",
    href: "mailto:mouzamsabirr@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    label: "linkedin.com/in/mouzam-sabirr",
    href: "https://www.linkedin.com/in/mouzam-sabirr",
  },
  {
    icon: <FaGithub />,
    label: "github.com/mouzam-sabir",
    href: "https://github.com/mouzam-sabir/",
  },
];

const initialForm = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.subject || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    try {
      await axios.post("/api/contact", form);
      toast.success("Message sent successfully!");
      setForm(initialForm);
    } catch (err) {
      toast.error(
        err.response?.data?.error || "Failed to send. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section" id="contact">
      <div className="container">
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Contact
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Let's Work Together
        </motion.h2>

        <div className="contact-grid">
          {/* Left — links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <p className="contact-text">
              Have a project in mind or want to collaborate? I'm always open to
              discussing new opportunities in DevOps, infrastructure automation, or DevSecOps.
              Feel free to reach out.
            </p>
            <div className="contact-links">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <span className="icon">{l.icon}</span>
                  {l.label}
                </a>
              ))}
            </div>
            <p className="contact-text" style={{ marginTop: "1rem" }}>
              Phone: +92 309 2238661
            </p>
          </motion.div>

          {/* Right — contact form → Express API → MongoDB */}
          <motion.div
            className="contact-form-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h3>Send me a message</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={4}
                />
              </div>
              <button
                type="submit"
                className={`btn btn-primary${loading ? " btn-disabled" : ""}`}
                disabled={loading}
                style={{ width: "100%", justifyContent: "center" }}
              >
                <FiSend size={16} />
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
