
import React, { useState } from "react";
import { Link } from "react-scroll";

import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Navbar height offset for scrolling
  const NAVBAR_OFFSET = -80;

  return (
    <nav className="navbar">
      <div className="logo">Zain Ali</div>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <Link
            to="hero"
            smooth={true}
            duration={700}       // slightly slower, feels smoother
            offset={NAVBAR_OFFSET}
            spy={true}          // highlights link when section is active
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
        </li>

        <li>
          <Link
            to="about"
            smooth={true}
            duration={700}
            offset={NAVBAR_OFFSET}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
        </li>

        <li>
          <Link
            to="skills"
            smooth={true}
            duration={700}
            offset={NAVBAR_OFFSET}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </Link>
        </li>

        <li>
          <Link
            to="projects"
            smooth={true}
            duration={700}
            offset={NAVBAR_OFFSET}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </Link>
        </li>

        <li>
          <Link
            to="contact"
            smooth={true}
            duration={700}
            offset={NAVBAR_OFFSET}
            spy={true}
            activeClass="active"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </li>
      </div>

      <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}

export default Navbar;
