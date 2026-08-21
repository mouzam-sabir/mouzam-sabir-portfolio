import { useState, useEffect } from "react";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const sections = ["hero", "about", "skills", "projects", "experience", "education", "certifications", "contact"];

export default function ScrollNav() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 300);

      const scrollY = window.scrollY + window.innerHeight / 2;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && scrollY >= el.offsetTop) {
          setCurrent(i);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (index) => {
    const el = document.getElementById(sections[index]);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const goUp = () => {
    if (current > 0) scrollTo(current - 1);
  };

  const goDown = () => {
    if (current < sections.length - 1) scrollTo(current + 1);
  };

  return (
    <div className={`scroll-nav${visible ? " visible" : ""}`}>
      <button
        className={`scroll-btn${current === 0 ? " disabled" : ""}`}
        onClick={goUp}
        aria-label="Scroll up"
        disabled={current === 0}
      >
        <FiChevronUp size={20} />
      </button>

      <div className="scroll-dots">
        {sections.map((sec, i) => (
          <button
            key={sec}
            className={`scroll-dot${i === current ? " active" : ""}`}
            onClick={() => scrollTo(i)}
            aria-label={sec}
          />
        ))}
      </div>

      <button
        className={`scroll-btn${current === sections.length - 1 ? " disabled" : ""}`}
        onClick={goDown}
        aria-label="Scroll down"
        disabled={current === sections.length - 1}
      >
        <FiChevronDown size={20} />
      </button>
    </div>
  );
}
