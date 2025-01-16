import React from "react";
import { Link } from 'react-router-dom';
import catImage from "C:/Users/Dell/Downloads/yasiru/Frontend/src/Images/AboutUsCAT.png"; // Replace with your actual image path

const AboutUs = () => {
  return (
    <section id = "AboutUs">
    <div className="about-us-section">
      <div className="text-container">
        <h1>
          We care your pet <br />
          <span>As you care</span>
        </h1>
        <p>
        Our mission is to provide the highest level of care for your beloved pets,
         ensuring their happiness and well-being. 
         We understand the bond you share with your pets and strive to deliver compassionate and personalized services tailored to their needs.
        </p>
        <Link to="/AboutUspage" className="about-us-button">
          More...
        </Link>
      </div>
      <div className="image-container">
        <img src={catImage} alt="Cute Cat" />
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
