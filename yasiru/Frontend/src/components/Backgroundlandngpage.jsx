import React from "react";
import { Link } from 'react-router-dom';
import dogImage from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/Golden retriver.png"; 

const Backgroundlandngpage = () => {
  return (
    <section id = "Backgroundlandngpage">
    <div className="banner-container">
    <div className="banner-content">
      <div className="text-section">
        <h1>Caring Hands,<br/><span>Happy Paws</span></h1>
        <p>
        Effortless Scheduling for Exceptional Care, Just a Click Away,
        Backed by Love and Expertise.
        </p>
        <Link to="/Dashboardpage" className="banner-button">
        Get Started
        </Link>
      </div>
      <div className="image-section">
        <img src={dogImage} alt="Cute Dog" />
      </div>
    </div>
  </div>
  </section> 

   
    
  );
};

export default Backgroundlandngpage;
