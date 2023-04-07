import {
  GoogleMap,
  LoadScript,
  MapContext,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { useState, createContext, useRef, useEffect } from "react";
import React from "react";
import "../styles/Home.css";

import "../styles/Form.css";
import { SiGooglemaps } from "react-icons/si";
import { useLocation } from "react-router-dom";
import { SlArrowRight } from "react-icons/sl";
import { SlArrowLeft } from "react-icons/sl";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function Map() {
  const [center, setCenter] = useState({ lat: 45.94, lng: 25.0 });
  const mapRef = useRef(null);
  const autocompleteRef = useRef(null);

  const [isMapLoaded, setIsMapLoaded] = useState(true);

  const [showForm, setShowForm] = useState(true);

  const toggleForm = () => {
    setShowForm((prev) => !prev);
  };

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
  const handleButtonClick2 = (event) => {
    event.preventDefault();
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
          zoom={8}
          onLoad={onLoad}
        >
          <Marker position={center} />
        </GoogleMap>
        <button onClick={toggleForm} className="hide">
          {showForm ? <SlArrowLeft /> : <SlArrowRight />}
        </button>
        {showForm && (
          <form className="mapForm" onSubmit={handlePlaceChanged}>
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
        )}
      </LoadScript>
    </div>
  );
}

export default Map;
