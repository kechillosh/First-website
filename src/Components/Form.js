import React from "react";
import "../styles/Home.css";
import Map from "./map";
import "../styles/Form.css";
import { SiGooglemaps } from "react-icons/si";
import { Autocomplete, LoadScript } from "@react-google-maps/api";
function Form() {
  return (
    <div>
      <Map />

      <form>
        <label htmlFor="pickup-location">
          Pick-up Location <SiGooglemaps />:
        </label>

        <input
          type="text"
          id="pickup-location"
          name="pickup-location"
          required
        />

        <label htmlFor="pickup-date">Pick-up Date:</label>
        <input type="date" id="pickup-date" name="pickup-date" required />

        <label htmlFor="pickup-time">Pick-up Time:</label>
        <input type="time" id="pickup-time" name="pickup-time" required />

        <label htmlFor="dropoff-date">Drop-off Date:</label>
        <input type="date" id="dropoff-date" name="dropoff-date" required />

        <input type="submit" value="Calculate Route" />
      </form>
    </div>
  );
}

export default Form;
