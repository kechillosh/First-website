import {
  GoogleMap,
  LoadScript,
  MapContext,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { useState, createContext, useRef } from "react";
import React from "react";
import "../styles/Home.css";

import "../styles/Form.css";
import { SiGooglemaps } from "react-icons/si";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function Map() {
  const [center, setCenter] = useState({ lat: -3.745, lng: -38.523 });
  const mapRef = useRef(null);
  const autocompleteRef = useRef(null);

  const [isMapLoaded, setIsMapLoaded] = useState(true);

  const onLoad = (map) => {
    setIsMapLoaded(true);
    mapRef.current = map;
  };

  const handleUnload = () => {
    setIsMapLoaded(false);
  };

  const handlePlaceChanged = () => {
    const place = autocompleteRef.current.getPlace();
    const { lat, lng } = place.geometry.location;
    setCenter({ lat: lat(), lng: lng() });
  };
  const handleButtonClick2 = () => {
    // Navigate to the desired link
    window.location.href = "/NoCheckout";
  };

  return (
    <div className="map-container">
      <LoadScript
        googleMapsApiKey="AIzaSyBWtJ4FHdXjEY683HopGtSxi-Y3wJezC24"
        libraries={["places"]}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          onLoad={onLoad}
        >
          <Marker position={center} />
        </GoogleMap>
        <form onSubmit={handlePlaceChanged}>
          <label htmlFor="pickup-location">
            Pick-up Location <SiGooglemaps />:
          </label>
          <Autocomplete
            onLoad={(autocomplete) => {
              autocompleteRef.current = autocomplete;
            }}
            onPlaceChanged={handlePlaceChanged}
          >
            <input
              type="text"
              id="pickup-location"
              name="pickup-location"
              required
            />
          </Autocomplete>

          <label htmlFor="pickup-date">Pick-up Date:</label>
          <input type="date" id="pickup-date" name="pickup-date" required />

          <label htmlFor="pickup-time">Pick-up Time:</label>
          <input type="time" id="pickup-time" name="pickup-time" required />

          <label htmlFor="dropoff-date">Drop-off Date:</label>
          <input type="date" id="dropoff-date" name="dropoff-date" required />

          <input
            type="submit"
            value="Calculate Route"
            onClick={handleButtonClick2}
          />
        </form>
      </LoadScript>
    </div>
  );
}

export default Map;
