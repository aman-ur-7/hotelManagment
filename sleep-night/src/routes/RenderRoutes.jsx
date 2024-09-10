import Business from "../layout/header/Business";
import React from "react";
import { Routes, Route } from "react-router-dom";
import { Cities } from "../layout/header/Cities";
import Contact from "../layout/header/Contact";
import Home from "../layout/content/Home";
import Login from "../auth/Login";
import SignUp from "../auth/SignUp";

const RenderRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/*" element={<Home />} />
        <Route exact path="/business" element={<Business />} />
        <Route exact path="/cities" element={<Cities />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default RenderRoutes;
