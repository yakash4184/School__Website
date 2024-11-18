import React from 'react';
import './Contact.css';  // Custom styling for Contact page

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <header className="contact-header">
        <h1 className="moving-text">Get in Touch</h1>
        {/* <p className="moving-text">We’d love to hear from you! Reach out to us for any queries or feedback.</p> */}
      </header>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="form-container">
          <h3 className="moving-text">Contact Form</h3>
          <form action="" className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit" className="submit-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="map-section">
  <div className="map-container">
    <h3 className="moving-text">Our Location</h3>
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7299322.735303839!2d75.31012253969627!3d26.70853549381721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398fc17809b44e35%3A0x5c573342093913b!2sSavitri%20Balika%20Inter%20College%20khutaha%20Road%20Jamunahiya%20Mirzapur.!5e0!3m2!1sen!2sin!4v1731871676404!5m2!1sen!2sin"
      width="600"
      height="450"
      style={{ border: '0' }} // Corrected style usage
      allowFullScreen // Corrected attribute usage (camelCase)
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade" // Corrected attribute usage (camelCase)
      title="Location"
    ></iframe>
  </div>
</section>


      {/* Footer Section */}
      <footer className="contact-footer">
        <p>&copy; 2024 Your Company. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Contact;
