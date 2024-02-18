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
      <div className="flex flex-col min-h-screen">
        <Head />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
