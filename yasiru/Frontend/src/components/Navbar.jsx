import React , { useState }  from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from "C:/Users/Dell/Downloads/yasiru/Frontend/src/Images/2.png"; 


const Navbar = () => {

    const location = useLocation();

    const isHomePage = location.pathname === "/";

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav>
            <div className="navbar-brand">
                <div className="navbar-logo">
                    <img src={logo} alt="Paw Care Logo"/>
                </div>
                <h1>Paw Care</h1>
            </div>
            <button className="hamburger" onClick={toggleMenu}>
                ☰
            </button>
            <ul className={`nav-links ${isMenuOpen ? "active" : ""}`}>

                <li> {isHomePage ? (
                        // Same-page navigation when on the home page
                        <a href="#Backgroundlandngpage">Home</a>
                    ) : (
                        // Navigate to the home page
                        <Link to="/">Home</Link>
                    )} 
                </li>
                <li><a href="/#Services">Services</a></li>
                <li><a href="/#AboutUs">About</a></li>
                <li><a href="/#ContactUs">Contact</a></li>
                <li>
                    <Link to="/Makeappointment" className="navbar-button">
                        Book now
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
