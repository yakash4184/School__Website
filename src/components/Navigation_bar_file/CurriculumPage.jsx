import React, { useState } from 'react';
import './CurriculumPage.css';

const CurriculumPage = () => {
  const [activeTab, setActiveTab] = useState('Primary');

  // Sample data for the curriculum
  const curriculumData = {
    Primary: [
      { subject: 'Mathematics', description: 'Basic arithmetic, shapes, and numbers' },
      { subject: 'Science', description: 'Introduction to plants, animals, and environment' },
      { subject: 'English', description: 'Basic grammar, vocabulary, and reading' },
    ],
    Secondary: [
      { subject: 'Mathematics', description: 'Algebra, geometry, and data interpretation' },
      { subject: 'Physics', description: 'Basic mechanics and electricity' },
      { subject: 'History', description: 'World and regional history' },
    ],
    Senior: [
      { subject: 'Calculus', description: 'Differentiation and integration techniques' },
      { subject: 'Chemistry', description: 'Organic and inorganic chemistry' },
      { subject: 'Economics', description: 'Micro and macroeconomics concepts' },
    ],
  };

  return (
    <div className="curriculum-page">
      {/* Hero Section */}
      <div className="hero-section">
        <h1>Explore Our Curriculum</h1>
        <p>Learn about the subjects and topics we cover at every level.</p>
      </div>

      {/* Tabs for Curriculum Levels */}
      <div className="tabs">
        {Object.keys(curriculumData).map((level) => (
          <button
            key={level}
            className={`tab ${activeTab === level ? 'active' : ''}`}
            onClick={() => setActiveTab(level)}
          >
            {level}
          </button>
        ))}
      </div>

      {/* Curriculum Content */}
      <div className="curriculum-content">
        {curriculumData[activeTab].map((item, index) => (
          <div key={index} className="curriculum-item">
            <h3>{item.subject}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurriculumPage;
