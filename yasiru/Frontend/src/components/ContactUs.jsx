import React from "react";
import contactImage1 from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/about.png";
import contactImage2 from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/about-2.png";
import contactImage3 from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/about-3.png";

const ContactUs = () => {
    return (
        <section id = "ContactUs">
      <div className="contact-us-section">
        <div className="image-gallery">
          <div className="main-image">
            <img src={contactImage1} alt="Contact Main" />
            
          </div>
          <div className="thumbnail-images">
            <img src={contactImage3} alt="Thumbnail 1" />
            <img src={contactImage2} alt="Thumbnail 2" />
          </div>
        </div>
        <div className="form-container">
          <h2>Contact Us</h2>
          <p>
            Feel free to reach out to us for any queries, appointments, or
            feedback. We are here to help!
          </p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      </section>
    );
  };
  
  export default ContactUs;
