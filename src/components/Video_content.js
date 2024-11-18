import React, { useEffect, useState } from 'react';
import './video_content.css';
import video from './Images/school-video.mp4';
import { useNavigate } from 'react-router-dom';

function WhyChooseUs() {
  const [students, setStudents] = useState(100);
  const [staff, setStaff] = useState(100);
  const [result, setResult] = useState(100);
  const navigate = useNavigate(); // Ensure this is used

  // Counter animation
  useEffect(() => {
    const incrementStudents = setInterval(() => {
      setStudents((prev) => (prev < 1300 ? prev + 10 : 1300));
    }, 20);
    const incrementStaff = setInterval(() => {
      setStaff((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);
    const incrementResult = setInterval(() => {
      setResult((prev) => (prev < 100 ? prev + 1 : 100));
    }, 50);

    // Clear intervals when count reaches the target
    return () => {
      clearInterval(incrementStudents);
      clearInterval(incrementStaff);
      clearInterval(incrementResult);
    };
  }, []);

  return (
    <section className="why-choose-us-section">
      <div className="content-wrapper">
        {/* Text Section */}
        <div className="text-content">
          <h3 className="section-title">WHY CHOOSE US</h3>
          <h1 className="main-heading">
            Providing Best <br /> Education Over 7+ Years
          </h1>
          <p className="quote">
            "To Teach and Inspire, To Reach and Transform. Every Student, Every Year"
          </p>
          <p className="description">
            While choosing the right school, parents should make sure that the
            school is not just focused on academics but also emphasizes
            extracurricular activities, cultural events, and sacramental
            education.
          </p>
          <div className="stats">
            <div className="stat">
              <span className="stat-number">{students}+</span>
              <span className="stat-label">Happy Students</span>
            </div>
            <div className="stat">
              <span className="stat-number">{staff}+</span>
              <span className="stat-label">Experienced Staff</span>
            </div>
            <div className="stat">
              <span className="stat-number">{result}%</span>
              <span className="stat-label">Result</span>
            </div>
          </div>
        </div>

        {/* Video and Buttons Section */}
        <div className="video-content">
          <video width="100%" height="400px" controls autoPlay muted playsInline loop >
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="action-buttons">
            <button className="btn register-btn" onClick={() => {
              navigate("/registration"); // Using navigate for client-side routing
            }}>Registration Now</button>
            <button className="btn enquiry-btn">Enquiry Now</button>
            <button className="btn login-btn">Student Login</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
