import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// components
import Footer from "./components/Footer";
import Head from "./components/Head";
//pages
import Home from "./pages/Home";
import Listing from "./pages/Listing";
import Listings from "./pages/Listings";
import ContactPage from "./pages/ContactPage";
import CreateListing from "./pages/CreateListing";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Head />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listing/:listingId" element={<Listing />} />
            <Route path="/listings" element={<Listings />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/createListing" element={<CreateListing />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
