import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import RouteComponent from "./route";

import HeaderSlider from "./components/HeaderSlider";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Howitswork from "./components/Howitswork";
import Login from "./pages/Login";
import Register from "./components/Navbar/Register";
import LogoutButton from "./components/Navbar/Logout";
 
import FreeTrial from "./components/Navbar/Freetrial";
import Profile from "./components/Navbar/Profile"; 
import Team from "./components/Navbar/Team";
import Pricing from "./components/Pricing";

import Site from "./pages/Site";
import Finances from "./pages/Finances";
import Inventory from "./pages/Inventory";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<RouteComponent />} />
        <Route path="/HeaderSlider" element={<HeaderSlider />} />
        <Route path="/Footer" element={<Footer />} />
        <Route path="/Feature" element={<Feature />} />
        <Route path="/Howitswork" element={<Howitswork />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Logout" element={<LogoutButton />} />
        <Route path="/FreeTrial" element={<FreeTrial />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Pricing" element={<Pricing />} />
        <Route path="/Site" element={<Site />} />
        <Route path="/Finances" element={<Finances />} />
        <Route path="/Inventory" element={<Inventory />} />
      </Routes>
    </Router>
  ); 
}

export default App; 
