import React from "react";
import vetimgcropped from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/bg_3 cropped.JPG"; 


const aboutuspagecontent = () => {
  return (
    <section className="about-section">
    <h2 className="about-section-title">About Us...</h2>
      <div className="about-content">
        <div className="about-text">
          <div className="about-details">
            <div className="about-item">
              <h3>Our Vision</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod. There are many variations of passages of Lorem
                available.
              </p>
            </div>
            <div className="about-item">
              <h3>Our Mission</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod. There are many variations of passages of Lorem
                available.
              </p>
            </div>
            <div className="about-item">
              <h3>Our Values</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod. There are many variations of passages of Lorem
                available.
              </p>
            </div>
          </div>
        </div>
        <div className="about-image">
          <img
            src={vetimgcropped}
            alt="Dog and Cat"
            className="main-img"
          />
        </div>
      </div>
    </section>
  );
};

export default aboutuspagecontent;
