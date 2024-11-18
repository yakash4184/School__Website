import React from 'react';
import './Activities.css'; // Ensure to create this CSS file for styles

const Activities = () => {
  return (
    <div className="activities-page">
      <div className="header">
        <h1 className="moving-text">Our Activities</h1>
        <p className="moving-text">Explore a wide range of student activities.</p>
      </div>

      <div className="activities-grid">
        {/* Example Activity Cards */}
        <div className="activity-card">
          <h3>Sports Day</h3>
          <p>Join us for a day filled with exciting sports activities.</p>
          <button className="btn" onClick={() => alert('Explore Sports Day')}>Explore</button>
        </div>

        <div className="activity-card">
          <h3>Workshops</h3>
          <p>Attend various workshops for skill development.</p>
          <button className="btn" onClick={() => alert('Explore Workshops')}>Explore</button>
        </div>

        <div className="activity-card">
          <h3>Cultural Events</h3>
          <p>Participate in cultural events and showcase your talent.</p>
          <button className="btn" onClick={() => alert('Explore Cultural Events')}>Explore</button>
        </div>

        <div className="activity-card">
          <h3>Hackathons</h3>
          <p>Test your coding skills in exciting hackathons.</p>
          <button className="btn" onClick={() => alert('Explore Hackathons')}>Explore</button>
        </div>

        <div className="activity-card">
          <h3>Music Concerts</h3>
          <p>Enjoy live music performances from talented artists.</p>
          <button className="btn" onClick={() => alert('Explore Music Concerts')}>Explore</button>
        </div>

        <div className="activity-card">
          <h3>Volunteering</h3>
          <p>Contribute to the community through various volunteering programs.</p>
          <button className="btn" onClick={() => alert('Explore Volunteering')}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Activities;
