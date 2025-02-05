import React from 'react';
import bandula from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/about-1.png"; 
import steth from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/stethoscope.png"; 
import vet from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/veterinarian.png"; 
import emergency from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/emergency-call.png"; 
import customersup from "C:/Users/Dell/Desktop/Git/-Pet-care-appointment-system-/yasiru/Frontend/src/Images/24-7.png"; 

const WhyChooseUs = () => {
  const features = [
    {
      title: 'Care Advices',
      description: 'Far far away, behind the word mountains, far from the countries.',
      icon: <img src={steth} alt="steth" />, 
    },
    {
      title: 'Customer Supports',
      description: 'Far far away, behind the word mountains, far from the countries.',
      icon:  <img src={customersup} alt="customersup"/>,

    },
    {
      title: 'Emergency Services',
      description: 'Far far away, behind the word mountains, far from the countries.',
      icon: <img src={emergency} alt="emergency"/>,
    },
    {
      title: 'Veterinary Help',
      description: 'Far far away, behind the word mountains, far from the countries.',
      icon: <img src={vet} alt="vet"/>,
    },
  ];

  return (
    <div className="why-choose-us-container">
      <div className="image-container-pug">
        <img src={bandula} alt="Cute Dog" className="pug-image" />
      </div>
      <div className="content-container">
      <h2 className="section-title">Why Choose Us?</h2>
                <div className="features-grid">
                    {features.map((feature, index) => (
                        <div className="feature-item" key={index}>
                        <div className="feature-icon">
                            {feature.icon}
                        </div>
                        <div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </div>
                        </div>
                    ))}
                </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
