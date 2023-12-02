import React from 'react'
import Sidebar from '../../components/sections/navberSection/sidebar/sidebar'
import Map from '../../components/sections/mapSection/map'
import { CiSearch } from "react-icons/ci";
function HomePage() {
  return (
    <div className=" h-screen overflow-hidden">
      {/* Search bar */}
      <span className="border  border-black mb-1 inline-block absolute z-20 top-5 right-2 bg-white">
        <input
          type="search"
          name=""
          placeholder="search"
          id=""
          className="w-90 outline-none text-left h-7 p-1 pe-3"
        />
        <CiSearch className="inline-block" />
      </span>

      {/* DASHBOARD */}
      <div className=" w-100 relative h-full sm:flex border-black border-2 border-t-0 z-10">
        <div className="absolute bottom-0 top-20 left-0 z-20 sm:block sm:w-2/12 sm:relative sm:z-auto sm:border border-slate-300 sm:top-0">
          <Sidebar />
        </div>
        <div className=" sm:w-10/12 w-full h-full">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default HomePage