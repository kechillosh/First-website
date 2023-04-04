import {
  GoogleMap,
  LoadScript,
  MapContext,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";
import { useState, createContext } from "react";
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
  const mapRef = React.useRef(null);

  const [isMapLoaded, setIsMapLoaded] = useState(true);

  const onLoad = (map) => {
    setIsMapLoaded(true);
    // ...
  };

  const handleUnload = () => {
    setIsMapLoaded(false);
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
        <form>
          <label htmlFor="pickup-location">
            Pick-up Location <SiGooglemaps />:
          </label>
          <Autocomplete>
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

          <input type="submit" value="Calculate Route" />
        </form>
      </LoadScript>
    </div>
  );
}

export default Map;
