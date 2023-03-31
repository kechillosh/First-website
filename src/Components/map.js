import React, { useState } from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const center = {
  lat: -3.745,
  lng: -38.523,
};

function Map() {
  const [map, setMap] = useState(null);

  const onLoad = (map) => {
    setMap(map);
  };

  const onUnmount = () => {
    setMap(null);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyBWtJ4FHdXjEY683HopGtSxi-Y3wJezC24">
      <GoogleMap
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        mapContainerClassName="map-container"
      >
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </LoadScript>
  );
}

export default Map;
