// src/components/NavigationBar.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './Images/logo.png'; // Make sure the path is correct
import './NavigationBar.css'; // Import custom CSS

function NavigationBar() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Navbar.Brand as={Link} to="/" className="brand-container">
        <img
          src={logo} // Path to your logo image
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="School Logo"
        />
        <div className="brand-text">
          <span className="organization-name">Savitri Balika Inter College</span>
          <span className="address">Jamunhaiya, Mirzapur 231001</span>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>

          <NavDropdown title="Knowing Us" id="knowing-us-dropdown">
            <NavDropdown.Item as={Link} to="/our-vision">Our Vision</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/mission">Mission</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/history">History</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Academics" id="academics-dropdown">
            <NavDropdown.Item as={Link} to="/curriculum">Curriculum</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/faculty">Faculty</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/examinations">Examinations</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Student Zone" id="student-zone-dropdown">
            <NavDropdown.Item as={Link} to="/admissions">Admissions</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/student-council">Student Council</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/resources">Resources</NavDropdown.Item>
          </NavDropdown>

          <NavDropdown title="Campus" id="campus-dropdown">
            <NavDropdown.Item as={Link} to="/facilities">Facilities</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/activities">Activities</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
