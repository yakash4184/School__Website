import React from "react";
import { Carousel } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import Image_Slider from './components/Image_Slider.js';
import Image from "./Images/front.jpeg";
import Image2 from "./Images/back.jpeg";
import Image3 from "./Images/student_image.JPG";
import './Footer.css';
import './Intro.css';

const Home = () => {
  return (
    <div>
      {/* Home Container */}
      <div className="home-container">

        {/* Carousel */}
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image2} // Image for Beautiful Campus
              alt="School Campus"
            />
            <Carousel.Caption>
              <h3>Beautiful Campus</h3>
              <p>Explore our well-maintained school campus with modern facilities.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image} // Image for State-of-the-Art Classrooms
              alt="Classroom"
            />
            <Carousel.Caption>
              <h3>State-of-the-Art Classrooms</h3>
              <p>Our classrooms are equipped with the latest technology to enhance learning.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Image2} // Image for Library Resources
              alt="Library"
            />
            <Carousel.Caption>
              <h3>Library Resources</h3>
              <p>A rich collection of books and digital resources for all students.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

       <div className="container">
      <div className="school-intro">
        <div className="image-section">
          <img 
            src={Image3}// Replace with actual path to the image
            alt="Students in Classroom" 
            className="intro-image" 
          />
        </div>
        <div className="text-section">
          <h2>Savitri Balika Inter College</h2>
          <p>Mrs. Pooja, Ex-Chief Proctor and Head of the English Department at M.K.V.P. College, Varanasi, has always cherished a deep passion for serving society through education. Savitri School is a reflection of her lifelong dedication to this noble mission, bringing her vision for holistic and quality education to life. We at SBIC continually seek her guidance and blessings as we strive to excel in our educational journey.</p>
          <p>SBIC is a co-educational English medium institution based on CBSE pattern which aims at providing the education with harmonious fusion of ancient culture based education system and modern educational trends. We are committed with all our time, energy and thoughts for all-round development of our students.</p>
          <button className="learn-more-btn">Learn More</button>
        </div>
      </div>
    </div>


      
        {/* Programs Section
        <h3 className="programs-title">Our Programs</h3>
        <ul className="programs-list">
          <li>Science and Technology Club</li>
          <li>Arts and Culture Society</li>
          <li>Sports Teams</li>
          <li>Debate Club</li> */}
        {/* </ul> */}

        {/* Upcoming Events Section */}
        {/* <h3 className="events-title">Upcoming Events</h3>
        <ul className="events-list">
          <li>Annual Sports Day - March 15, 2024</li>
          <li>Parent-Teacher Meeting - March 20, 2024</li>
          <li>Science Fair - April 10, 2024</li>
        </ul> */}

        {/* Testimonials Section */}
        {/* <h3 className="testimonials-title">What Our Community Says</h3>
        <blockquote className="testimonial">
          "Savitri Balika Inter College has changed my life! The teachers are dedicated, and I love the supportive environment." - Student A
        </blockquote>
        <blockquote className="testimonial">
          "The school provides excellent resources and programs for our children." - Parent B
        </blockquote> */}

        {/* Contact Information */}
        {/* <h3 className="contact-title">Contact Us</h3>
        <p>Email: info@school.edu</p>
        <p>Phone: (123) 456-7890</p> */}

        {/* Social Media Links */}
        {/* <h3 className="social-media-title">Follow Us</h3>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> */}
      </div>

      {/* Footer Section */}
      {/* <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Savitri Balika Inter College. All rights reserved.</p>
          <ul className="footer-links">
            <li><a href="#privacy-policy">Privacy Policy</a></li>
            <li><a href="#terms-of-service">Terms of Service</a></li>
            <li><a href="#contact-us">Contact Us</a></li>
          </ul>
        </div>
      </footer> */}
    </div>
  );
};

export default Home;
