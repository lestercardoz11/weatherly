import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const mapStyles = {
  width: '100%',
  height: '100%',
};

export const MapContainer = (props) => {
  const { latitude, longitude, google } = props;
  return (
    <Map
      google={google}
      zoom={10}
      style={mapStyles}
      initialCenter={{
        lat: latitude,
        lng: longitude,
      }}
      center={{
        lat: latitude,
        lng: longitude,
      }}>
      <Marker position={{ lat: latitude, lng: longitude }} />
    </Map>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.GOOGLE_MAPS_API_KEY,
})(MapContainer);
