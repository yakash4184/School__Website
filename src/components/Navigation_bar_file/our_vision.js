// src/OurVision.js
import React from 'react';
import './our_vision.css'; // Importing the CSS file for styling

const OurVision = () => {
  return (
    <div className="vision-container">
      <h1>Our Vision</h1>
      <p>
        Our vision is to create a nurturing and inclusive environment where students can
        thrive academically, socially, and emotionally. We aim to foster a love of
        learning, creativity, and critical thinking that empowers our students to become
        responsible, compassionate, and successful global citizens.
      </p>
      <div className="vision-points">
        <h2>Key Aspects of Our Vision:</h2>
        <ul>
          <li>Encourage holistic development of each student</li>
          <li>Promote academic excellence and innovation</li>
          <li>Build a strong sense of community and belonging</li>
          <li>Foster respect, empathy, and diversity</li>
          <li>Prepare students to make a positive impact in society</li>
        </ul>
      </div>
    </div>
  );
};

export default OurVision;
