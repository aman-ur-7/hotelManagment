import Business from "../layout/header/Business";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Contact from "../layout/header/Contact";
import Home from "../layout/content/Home";
import SignUp from "../auth/SignUp";
const Login = lazy(() => import("../auth/Login"));
const Cities = lazy(() => import("../layout/header/Cities"));
const Payment = lazy(() => import("../layout/content/components/Payment"));

const RenderRoutes = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path="/*" element={<Home />} />
          <Route exact path="/business" element={<Business />} />
          <Route exact path="/cities" element={<Cities />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/payment" element={<Payment />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RenderRoutes;
