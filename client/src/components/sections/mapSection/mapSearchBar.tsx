import React,{useEffect} from 'react'
import { GeoSearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import { updateSearchData } from '../../../Redux/AppSates/mapSearchStates/mapSearchStates';
import { useDispatch } from "react-redux";
import { useMap } from "react-leaflet";
import "leaflet-geosearch/dist/geosearch.css"

type Res  = {
  x: number, // lon,
  y: number, // lat,
  label: String, // formatted address
}



const SearchField = () => {
  const dispatch = useDispatch()
  const provider = new OpenStreetMapProvider();
    const map = useMap();

  // @ts-ignore
  const searchControl = new GeoSearchControl({
    provider: provider,
    style: "bar",
    showMarker: true,
    showPopup: true,
    autoClose: true,
    retainZoomLevel: false,
    animateZoom: true,
    keepResult: false,
    searchLabel: "search",
  })

  // @ts-ignore
  useEffect(() => {
    map.addControl(searchControl);
    map.on("geosearch/showlocation", (result) => {
      const searchData: Res[] = [];

      // @ts-ignore
      result &&
        // @ts-ignore
        result.length >= 1 &&
        // @ts-ignore
        result.map((data, index) => {
          index <= 50
          searchData.push({ x: data.x, y: data.y, label: data.label });
        });
        console.log(searchData);
        
      dispatch(updateSearchData(searchData));
    });

    return () => map.removeControl(searchControl);
  }, []);
  return null;
}

export default SearchField;