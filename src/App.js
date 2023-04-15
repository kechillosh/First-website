import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Contact from "./Components/Contact";
import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Footer from "./Components/Footer";
import Map from "./Components/Map.js";
import NoCheckout from "./Components/NoCheckout";

function App() {
  // Set a boolean flag to determine whether to show the footer or not
  const [showFooter, setShowFooter] = useState(true);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/CheckoutForm" element={<Map />} />
            <Route
              path="/NoCheckout"
              element={<NoCheckout setShowFooter={setShowFooter} />}
            />
          </Route>
        </Routes>
      </Router>
      {showFooter && <Footer />}
    </div>
  );
}

export default App;
