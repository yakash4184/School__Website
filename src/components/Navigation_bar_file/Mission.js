import React from 'react';
import './Mission.css';  // Ensure you have this CSS file

const Mission = () => {
  return (
    <div className="mission-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="moving-text">Our Mission</h1>
          <p className="mission-description">
            Our mission is to empower individuals with knowledge, foster innovation, and create a sustainable impact in the world.
          </p>
        </div>
      </section>

      <section className="mission-details">
        <div className="content">
          <h2>Our Core Values</h2>
          <ul>
            <li>Innovation and Creativity</li>
            <li>Commitment to Excellence</li>
            <li>Integrity and Responsibility</li>
            <li>Collaboration and Teamwork</li>
            <li>Continuous Growth and Learning</li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Mission;
