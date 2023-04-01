import React from "react";

function Form() {
  return (
    <form>
      <label htmlFor="pickup-location">Pick-up Location:</label>
      <input type="text" id="pickup-location" name="pickup-location" required />

      <label htmlFor="pickup-date">Pick-up Date:</label>
      <input type="date" id="pickup-date" name="pickup-date" required />

      <label htmlFor="pickup-time">Pick-up Time:</label>
      <input type="time" id="pickup-time" name="pickup-time" required />

      <label htmlFor="dropoff-date">Drop-off Date:</label>
      <input type="date" id="dropoff-date" name="dropoff-date" required />

      <input type="submit" value="Submit" />

      <label htmlFor="dropoff-date">Drop-off Date:</label>
    </form>
  );
}

export default Form;
