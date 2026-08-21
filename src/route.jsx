
import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginModal from "./components/LoginModal";
import HeaderSlider from "./components/HeaderSlider";
import Footer from "./components/Footer";
import Feature from "./components/Feature";
import Howitswork from "./components/Howitswork";
import Login from "./components/Navbar/Login";

const HomePage = () => (
  <>
    <LoginModal />
    <HeaderSlider />
    <Feature />
    <Howitswork />
    <Footer />
  </>
);


const AllRoutes = () => {
  return (
    <>
      <div className="pt-24">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </>
  );
};

export default AllRoutes;

