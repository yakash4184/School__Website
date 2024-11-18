import React from 'react';
import './Facilities.css'; // Ensure to create this CSS file

const Facilities = () => {
  return (
    <div className="facilities-page">
      <div className="header">
        <h1>Facilities Available</h1>
        <p>Explore the different facilities we offer for students.</p>
      </div>

      <div className="facilities-grid">
        {/* Example Facility Cards */}
        <div className="facility-card">
          <h3>Library</h3>
          <p>Access a wide range of books and digital resources.</p>
          <button className="btn" onClick={() => alert('Explore Library')}>Explore</button>
        </div>

        <div className="facility-card">
          <h3>Computer Lab</h3>
          <p>Use the latest computers and software to enhance your learning.</p>
          <button className="btn" onClick={() => alert('Explore Computer Lab')}>Explore</button>
        </div>

        <div className="facility-card">
          <h3>Sports Complex</h3>
          <p>Get access to various sports facilities for physical activities.</p>
          <button className="btn" onClick={() => alert('Explore Sports Complex')}>Explore</button>
        </div>

        <div className="facility-card">
          <h3>Cafeteria</h3>
          <p>Enjoy healthy and delicious meals in our cafeteria.</p>
          <button className="btn" onClick={() => alert('Explore Cafeteria')}>Explore</button>
        </div>

        <div className="facility-card">
          <h3>Auditorium</h3>
          <p>Attend seminars, workshops, and cultural events in our auditorium.</p>
          <button className="btn" onClick={() => alert('Explore Auditorium')}>Explore</button>
        </div>

        <div className="facility-card">
          <h3>Study Rooms</h3>
          <p>Use private study rooms to focus on your work.</p>
          <button className="btn" onClick={() => alert('Explore Study Rooms')}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Facilities;
