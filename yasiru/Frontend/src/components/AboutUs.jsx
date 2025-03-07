import React from "react";
import catImage from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/AboutUsCAT.png"; // Replace with your actual image path

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
        At PawCare, our <b>mission</b> is to provide the highest level of care for your beloved pets, ensuring their happiness and well-being. We are dedicated to delivering compassionate and personalized services tailored to their needs. Our <b>vision</b> is to become the most trusted and loved pet care provider, recognized for our commitment to excellence, integrity, and enhancing the lives of pets and their owners. We value <b>compassion, trust, innovation, and a passion for animal welfare, striving to build lasting relationships with pet owners through honesty and exceptional service</b>. 🐾❤️
        </p>
      </div>
      <div className="image-container">
        <img src={catImage} alt="Cute Cat" />
      </div>
    </div>
    </section>
  );
};

export default AboutUs;
