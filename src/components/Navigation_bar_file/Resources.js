import React from 'react';
import './Resources.css'; // Ensure to create this CSS file

const Resources = () => {
  return (
    <div className="resources-page">
      <div className="header">
        <h1>Educational Resources</h1>
        <p>Explore a collection of educational materials, tools, and references to enhance your learning experience.</p>
      </div>

      <div className="resources-grid">
        {/* Example Resource Cards */}
        <div className="resource-card">
          <h3>Textbooks</h3>
          <p>Find the latest textbooks for all subjects in our library.</p>
          <button className="btn" onClick={() => alert('Explore Textbooks')}>Explore</button>
        </div>

        <div className="resource-card">
          <h3>Online Courses</h3>
          <p>Access online courses and tutorials to help you with your studies.</p>
          <button className="btn" onClick={() => alert('Explore Online Courses')}>Explore</button>
        </div>

        <div className="resource-card">
          <h3>Reference Materials</h3>
          <p>Explore a variety of reference materials for research and deeper understanding.</p>
          <button className="btn" onClick={() => alert('Explore Reference Materials')}>Explore</button>
        </div>

        <div className="resource-card">
          <h3>Study Guides</h3>
          <p>Get study guides and notes to help you prepare for exams.</p>
          <button className="btn" onClick={() => alert('Explore Study Guides')}>Explore</button>
        </div>

        <div className="resource-card">
          <h3>Tools & Software</h3>
          <p>Check out the best tools and software for enhancing your learning.</p>
          <button className="btn" onClick={() => alert('Explore Tools & Software')}>Explore</button>
        </div>

        <div className="resource-card">
          <h3>Research Journals</h3>
          <p>Access academic journals to stay updated with the latest research.</p>
          <button className="btn" onClick={() => alert('Explore Research Journals')}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
