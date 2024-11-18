// src/components/ActivityCard.js
import React from 'react';
import './ActivityCard.css';



function ActivityCard({ title, description, image, logo }) {
  return (
    <div className="activity-card">
      <img src={image} alt={title} className="activity-image" />
      <div className="activity-content">
        <img src={logo} alt={`${title} Logo`} className="activity-logo" />
        <h3>{title}</h3>
        <p>{description}</p>
        <button className="read-more-btn">Read More</button>
      </div>
    </div>
  );
}

export default ActivityCard;
