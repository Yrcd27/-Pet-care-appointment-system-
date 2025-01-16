import React from "react";


const services = [
    {
      title: "Veterinary Services",
      description:
        "Expert veterinary care to ensure your pets stay healthy and happy.",
      icon: "🩺", 
    },
    {
      title: "Vaccinations",
      description:
        "Keep your furry friends protected and healthy with timely vaccinations tailored for their needs.",
      icon: "💉",
    },
    {
      title: "Pet Daycare",
      description:
        "A safe and fun environment to keep your pets engaged while you're away.",
      icon: "🦴",
    },
    {
      title: "Pet Grooming",
      description:
        "Comprehensive grooming services including baths, nail trimming, and haircuts.",
      icon: "✂️",
    },
    
  ];
  
  const Services = () => {
    return (
      <section id ="Services" className="services-section">
        <h2 className="services-heading">Our Services</h2>
        <div className="services-container">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;