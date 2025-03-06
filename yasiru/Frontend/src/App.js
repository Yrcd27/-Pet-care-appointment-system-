import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Dashboard from './Pages/Dashboardpage';
import Makeappointment from './Pages/Makeappointment';
import UpdateApp from './Pages/UpdateApp';
import AboutUspage from './Pages/AboutUspage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import './App.css';


function App() {
    return (
        <Router>
            <Navbar/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Dashboardpage" element={<Dashboard />} />
                <Route path="/UpdateApp/:id" element={<UpdateApp />} />
                <Route path="/Makeappointment" element={<Makeappointment />} />
                <Route path="/AboutUspage" element={<AboutUspage />} />
            </Routes>

            <Footer/>
        </Router>
    );
    
}

export default App;


