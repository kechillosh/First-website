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

        <div className="about">
          <h1>About us:</h1>
          <p>
            At our company, we're committed to providing the highest quality
            products and services to our customers.
            <br /> We believe that every interaction with our brand should be a
            positive and memorable experience , <br />
            which is why we go above and beyond to ensure that our products are
            innovative, our customer service is exceptional,
            <br />
            and our team is passionate about what they do.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
