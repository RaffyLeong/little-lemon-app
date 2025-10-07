import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        {/* Logo Section */}
        <div className="footer-logo">
          <img src="/Little-Lemon.jpg" alt="Little Lemon" />
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/">Order Online</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-contact">
          <h4>Contact</h4>
          <p>123 Lemon Street Chicago, IL 60601</p>
          <p>Phone Number: (555) 123-4567</p>
          <p>Email: info@littlelemon.com</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="social-links">
            <a href="/">Facebook</a>
            <a href="/">Instagram</a>
            <a href="/">Twitter</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon Restaurant. All rights reserved.</p>
        <ul>
          <li><a href="/privacy">Privacy Policy</a></li>
          <li><a href="/terms">Terms of Service</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
