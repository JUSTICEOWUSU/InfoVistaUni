import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression} from "leaflet"
import 'leaflet/dist/leaflet.css'

function Map() {
  const position: LatLngExpression = [5.6037, -0.187];
  return (
        <MapContainer
          center={position}
          zoom={13}
          scrollWheelZoom={false}
          className="h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              This is Accra, <br /> the capital of Ghana..
            </Popup>
          </Marker>
        </MapContainer>
  );
}

export default Map