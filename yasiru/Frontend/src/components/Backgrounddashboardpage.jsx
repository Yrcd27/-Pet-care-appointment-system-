import React from "react";
import { Link } from 'react-router-dom';

const Backgrounddashboardpage = () => {
  return (
    <section id = "Backgrounddashboardpage">
        <div className="banner-container">
            <div className="banner-content-dashboardpage">
              <div className="text-section-dashboardpage">
                <h2>"A healthy pet is a happy companion.<br/> Together, we’ll keep their tails wagging."</h2>
                <div className="banner-button-dashboardpage">
                    <Link to="/Makeappointment" className="banner-button">
                        Make an Appointment
                    </Link>
                </div>
              </div>
            </div>
          </div>
    </section> 

   
    
  );
};

export default Backgrounddashboardpage;