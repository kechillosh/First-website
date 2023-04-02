import React from "react";
import backg from "../assets/backg.jpg";
import backg1 from "../assets/backg1.png";
import "../styles/Home.css";

import Map from "./Map";
import { Link, Router } from "react-router-dom";
export const Home = () => {
  return (
    <div>
      <div className="mainHome">
        <div
          className="backgroundImg"
          style={{ backgroundImage: `url(${backg1})` }}
        ></div>
        <div className="secondHome">
          <h1>Rent. Drive. Enjoy. - Your Journey, Our Passion</h1>
          <p>
            Whether you're planning a road trip, exploring a new city, or just
            need a reliable ride, our car rental company has got you covered.
            <br />
            With our wide selection of vehicles and affordable prices, you can
            easily find the perfect car to suit your needs and budget. <br />
            Plus, our friendly customer service team is always here to help you
            along the way. <br />
            Book your car rental today and start your next adventure with ease!
          </p>
          <Link to="/CheckoutForm">
            <button>Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
