import React from 'react'

import { TbMapPinDown, TbNavigationFilled } from "react-icons/tb";
import { FiLayers } from "react-icons/fi";

function Sidebar() {
  return (
    <div className="w-100 h-full flex justify-start flex-col gap-3 pt-10 sm:pt-3 relative lg:px-5 ">
      <span className="px-2 sm:my-3 block my-2">
        <p className=" hidden sm:inline-block sm:pe-2 ">2D Map</p>
        <TbMapPinDown className="text-4xl sm:text-lg sm:inline-block  text-slate-600" />
      </span>
      <span className="px-2 sm:my-3 block my-2">
        <p className=" hidden sm:inline-block sm:pe-2"> 3D Map</p>
        <FiLayers className="text-4xl sm:text-lg sm:inline-block  text-slate-600" />
      </span>
      <span className="px-2 sm:my-3 block my-2">
        <p className=" hidden sm:inline-block sm:pe-2"> Navigation</p>
        <TbNavigationFilled className="text-4xl sm:text-lg sm:inline-block  text-slate-600" />
      </span>
      <span className="px-2 sm:my-3 block my-2">
        <p className=" hidden sm:inline-block sm:pe-2"> map</p>
        <TbMapPinDown className="text-4xl sm:text-lg sm:inline-block  text-slate-600" />
      </span>
    </div>
  );
}

export default Sidebar