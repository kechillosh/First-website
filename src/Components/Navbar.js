import React, { useState } from "react";
import { Link, Router } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/logo1.png";
import { SiGooglemaps } from "react-icons/si";
import { SiGooglehome } from "react-icons/si";
import { SiGooglemessages } from "react-icons/si";
import { TfiAlignJustify } from "react-icons/tfi";
import DropdownMenu from "./DropdownMenu";
function Navbar() {
  return (
    <div className="navbar">
      <div className="leftSide">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <div className="rightSide">
        <Link className="navLink" to="/">
          <SiGooglehome /> Home
        </Link>
        <Link className="navLink" to="/Locations">
          <SiGooglemaps /> Locations
        </Link>
        <Link className="navLink" to="/Contact">
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
