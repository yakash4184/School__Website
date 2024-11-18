import React from 'react';
import './Footer.css'; // Import CSS file for styling
import logo from './Images/logo new.png';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* School Logo and Tagline */}
        <div className="footer-logo-section">
          <img src={logo} alt="School Logo" className="school-logo" />
          <p className="school-tagline">"Empowering Future Leaders"</p>
        </div>

        {/* Quick Links Section */}
        <div className="footer-links-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/admissions">Admissions</a></li>
            <li><a href="/programs">Programs</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/news">News & Events</a></li>
          </ul>
        </div>

        {/* Contact Information Section */}
        <div className="footer-contact-section">
          <h3>Contact Us</h3>
          <p>Khutaha Road Jamunahiya Mirzapur</p>
          <p>Email: schoolsavitri1@gmail.com</p>
          <p>Phone: 8400585469</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Developer Information */}
        <div className="footer-developer-info">
          <h3>Developer Info</h3>
          <p>Developed by Akash Yadav</p>
          <p>Email: yakash4184@gmail.com</p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/akash288/">Akash Yadav</a></p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} School Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
