import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const categories = [
  {
    title: "DevOps / Infrastructure",
    skills: [
      "Docker",
      "Docker Compose",
      "Kubernetes",
      "Git",
      "GitHub",
      "GitLab CI/CD",
      "Jenkins",
      "Terraform",
      "Ansible",
      "Linux",
      "Nginx",
      "CI/CD",
      "Containerization",
      "Infrastructure as Code",
      "Configuration Management",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    title: "Cybersecurity",
    skills: [
      "Wazuh",
      "Splunk",
      "pfSense",
      "Kali Linux",
      "Wireshark",
      "Nmap",
      "Burp Suite",
      "Metasploit",
      "MobSF",
      "Nessus",
      "OpenVAS",
    ],
  },
  {
    title: "Networking",
    skills: [
      "DNS",
      "TCP/IP",
      "HTTP/HTTPS",
      "SSH",
      "Linux Networking",
      "nslookup",
      "dig",
      "host",
      "netstat",
      "ss",
      "route",
      "arp",
      "iptables",
      "tcpdump",
      "ifup/ifdown",
      "ethtool",
      "hostname",
    ],
  },
  {
    title: "Programming",
    skills: [
      "Python",
      "C++",
      "HTML/CSS",
    ],
  },
];

export default function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <motion.p
          className="section-label"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Tech Stack
        </motion.p>
        <motion.h2
          className="section-title"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={0}
        >
          Skills &amp; Technologies
        </motion.h2>

        <div className="skills-categories">
          {categories.map((cat, i) => (
            <motion.div
              className="skill-category"
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={i}
            >
              <h3>
                <span className="bar" />
                {cat.title}
              </h3>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
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
