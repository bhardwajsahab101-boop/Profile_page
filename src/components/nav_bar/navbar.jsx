// rfce: Creates a React functional component with an export default statement at the bottom. This is widely used for modern functional components.
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="container">
        <a href="/" className="logo">
          PB
        </a>
        <button
          className="menu-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        {/* <button className="menu-toggle" aria-label="Toggle navigation">☰</button> */}
        <div>
          <ul className={`nav_links ${isOpen ? "active" : ""}`}>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
