import React, { useState } from "react";
import Button from "@mui/material/Button";

const GeoLocationApp = () => {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    if ("geolocation" in window.navigator) {
      window.navigator.geolocation.getCurrentPosition(
        (success) => {
          setLocation(success.coords);
        },
        (error) => {
          console.log(error, "unable to get location");
        }
      );
    }
  };
  return (
    <>
      <h3>Co-ordinates</h3>
      <div>
        <p>Latitude : {location?.latitude}</p>
        <p>Longitude : {location?.longitude}</p>
        <Button
          variant="contained"
          size="large"
          color="success"
          onClick={getLocation}
        >
          My Location
        </Button>
      </div>
    </>
  );
};

export default GeoLocationApp;
