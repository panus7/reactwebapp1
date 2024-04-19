import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home'; // Import your Home component
import { About } from './pages/About';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/About" element={<About />} />
            {/* Add more routes as needed */}
        </Routes>
    );
}

export default AppRoutes;