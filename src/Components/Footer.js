import React from "react";
import { Instagram, LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="socialMedia">
          <a href="https://www.instagram.com/">
            <Instagram />
          </a>

          <a href="https://www.linkedin.com/in/amir-el-shaer-b4b6b825a/">
            <LinkedIn />
          </a>

          <p> &copy; 2023 El Shaer Amir</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
