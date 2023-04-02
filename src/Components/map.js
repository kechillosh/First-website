import React, { useState, createContext } from "react";
import {
  GoogleMap,
  LoadScript,
  MapContext,
  Marker,
  Autocomplete,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const MapContext = createContext();
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
      <LoadScript googleMapsApiKey="AIzaSyBWtJ4FHdXjEY683HopGtSxi-Y3wJezC24">
        {isMapLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <div> is loading...</div>
        )}
      </LoadScript>
    </div>
  );
}

export default Map;
