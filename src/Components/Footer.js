import React from "react";
import { Instagram, LinkedIn } from "@mui/icons-material";
import "../styles/Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="socialMedia">
          <Instagram />
          <LinkedIn />
          <p> &copy; 2023 El Shaer Amir</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
