import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Footer from "./components/Footer";
import Head from "./components/Head";
//pages
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Head />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
