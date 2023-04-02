import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo1.png";
import { SiGooglemaps } from "react-icons/si";
import { SiGooglehome } from "react-icons/si";
import { SiGooglemessages } from "react-icons/si";
import { TfiAlignJustify } from "react-icons/tfi";
import DropdownMenu from "./DropdownMenu";
import { GoogleMap, LoadScript, MapContext } from "@react-google-maps/api";
import Map from "./Map";

function Navbar() {
  const handleButtonClick1 = () => {
    // Navigate to the desired link
    window.location.href = "/";

    // Reload the page after the navigation is complete
    window.addEventListener("load", () => {
      window.location.reload();
    });
  };

  const handleButtonClick2 = () => {
    // Navigate to the desired link
    window.location.href = "/Contact";

    // Reload the page after the navigation is complete
    window.addEventListener("load", () => {
      window.location.reload();
    });
  };

  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="rightSide">
        <Link className="navLink" to="/" onClick={handleButtonClick1}>
          <SiGooglehome /> Home
        </Link>
        <Link className="navLink" to="/Locations">
          <SiGooglemaps /> Locations
        </Link>
        <Link className="navLink" to="/Contact" onClick={handleButtonClick2}>
          <SiGooglemessages /> Contact
        </Link>
      </div>
      <div className="mainDrop">
        <DropdownMenu className="dropdownmenu" />
      </div>
    </div>
  );
}
export default Navbar;
