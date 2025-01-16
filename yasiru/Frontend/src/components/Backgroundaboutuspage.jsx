import React from "react";
import dogImage from "C:/Users/Dell/Downloads/yasiru/Frontend/src/Images/Golden retriver.png"; 

const Backgroundaboutuspage = () => {
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
      </div>
      <div className="image-section">
        <img src={dogImage} alt="Cute Dog" />
      </div>
    </div>
  </div>
  </section> 

   
    
  );
};

export default Backgroundaboutuspage;
