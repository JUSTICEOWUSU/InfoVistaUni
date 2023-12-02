import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression} from "leaflet"
import 'leaflet/dist/leaflet.css'

function Map() {
  const position: LatLngExpression = [6.673175, -1.565423];
  return (
    <MapContainer
      center={position}
      zoom={80}
      scrollWheelZoom={false}
      className="h-full z-10"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} >
        <Popup>
          This is KNUST Ghana, <br /> a university of science and technology.
        </Popup>
      </Marker>
    </MapContainer>
  );
}

export default Map