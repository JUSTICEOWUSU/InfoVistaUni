import React from 'react';
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import { useSelector } from 'react-redux';
import { StoreTypes } from '../../../Redux/reduxStore';
import SearchField from './mapSearchBar';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";

import { LatLngExpression} from "leaflet"
import 'leaflet/dist/leaflet.css'


function Map() {
  const position: LatLngExpression = [6.673175, -1.565423];
const { searchData } = useSelector( (state:StoreTypes) => state.mapStates )

  return (
    <MapContainer
      center={position}
      zoom={80}
      scrollWheelZoom={false}
      className="h-full z-10"
    >
      <SearchField/>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>
          This is KNUST Ghana, <br /> a university of science and technology.
        </Popup>
      </Marker>

      {searchData.length >= 1 &&
        searchData.map((result, index) => (
          index <= 50 &&
          <Marker key={index} position={[result.y, result.x]} >
            <Popup>{result.label}</Popup>
          </Marker>
        ))}
  
    </MapContainer>
  );
}

export default Map