// src/components/History.js
import React from 'react';
import './History.css';  // Import the custom CSS for History page

function History() {
  return (
    <div className="history-container">
      <h1 className="history-title">Our School History</h1>
      <div className="history-content">
        <p>
          Founded in 1985, Savitri Balika Inter College has been a beacon of quality education in the region of Jamunhaiya, Mirzapur. Our school started with just a few teachers and students but has grown exponentially over the years.
        </p>
        <p>
          The school was established with a vision to provide girls with access to quality education and to empower them to excel in their personal and professional lives. The founder, Mr. Shyam Sundar, an educational visionary, believed in holistic education—equipping students with not only academic knowledge but also life skills.
        </p>
        <p>
          Over the years, the school has become a symbol of academic excellence, sports achievements, and social responsibility. From humble beginnings, Savitri Balika Inter College has blossomed into one of the most respected institutions in the region.
        </p>
        <h2 className="sub-heading">Key Milestones</h2>
        <ul className="milestones">
          <li>1985: School Established with an initial batch of 50 students.</li>
          <li>1995: Introduced the first batch of Science stream for Intermediate students.</li>
          <li>2005: Expanded the campus and added new classrooms and science labs.</li>
          <li>2010: Launched extra-curricular programs including sports, arts, and music.</li>
          <li>2015: School's first sports team won a regional championship.</li>
          <li>2020: Introduced digital classrooms and e-learning programs to enhance student engagement.</li>
        </ul>
        <p>
          Today, Savitri Balika Inter College is not just a school; it's a community—a family where students, teachers, and parents work together to create a nurturing environment that fosters growth, innovation, and success.
        </p>
        <p>
          Our commitment to excellence is unwavering, and we continue to adapt to the changing educational landscape. We believe that our legacy is built on the success of our students, who have gone on to become leaders, thinkers, and pioneers in various fields.
        </p>
      </div>
    </div>
  );
}

export default History;
