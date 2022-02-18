import React from "react";
import { Home, Food, Drinks } from "./Pages/Indexpages.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SectionNavbar, SectionFooter } from "./Component/IndexComponent.js";

const Layout = () => {
  return (
    <Router>
      <SectionNavbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Drinks" element={<Drinks />} />

        <Route path="/Food" element={<Food />} />
      </Routes>
      <SectionFooter />
    </Router>
  );
};

export default Layout;
