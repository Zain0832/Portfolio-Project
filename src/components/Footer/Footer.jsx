import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      {/* Thin separator line between Contact and Footer */}
      <div className="footer-separator"></div>

      <footer className="footer">
        <h2 className="footer-logo">Zain <span>Ali</span></h2>

        <p className="footer-tagline">
          Building clean, modern and responsive digital experiences.
        </p>

        <div className="footer-line"></div>

        <p className="footer-bottom">
          © {new Date().getFullYear()} Zain Ali — All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
