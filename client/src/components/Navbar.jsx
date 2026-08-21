import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";

const navItems = ["about", "skills", "projects", "experience", "education", "certifications", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`navbar${scrolled ? " scrolled" : ""}`}>
        <div className="container">
          <ul className="nav-links">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  to={item}
                  smooth
                  duration={500}
                  offset={-64}
                  spy
                  activeClass="active"
                  component="button"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav-right">
            <ThemeToggle />

            <button
              className="hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
        {navItems.map((item) => (
          <Link
            key={item}
            to={item}
            smooth
            duration={500}
            offset={-64}
            component="button"
            onClick={() => setMenuOpen(false)}
          >
            {item.charAt(0).toUpperCase() + item.slice(1)}
          </Link>
        ))}
      </div>
    </>
  );
}
