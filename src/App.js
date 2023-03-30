import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Locations from "./Components/Locations";
import Contact from "./Components/Contact";
import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import Map from "./Components/map";

const containerStyle = {
  width: "400px",
  height: "400px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
      <div>
        <Map />
      </div>
    </div>
  );
}

export default App;
