import React from 'react'
import Sidebar from '../../components/sections/navberSection/sidebar/sidebar'
import Map from '../../components/sections/mapSection/map'
function HomePage() {
  return (
    <div className="p-2 h-screen overflow-hidden border border-red-600">
      <div className=" w-100 relative h-full flex border-black border-2">
        <div className="w-1/12">
          <Sidebar />
        </div>
        <div className=" border border-green-500 w-11/12">
          <Map/>
          {/* <img
            src="https://images.unsplash.com/photo-1698785617585-e4e635e0990a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt=""
            className="w-full h-full"
          /> */}
        </div>
      </div>
    </div>
  );
}

export default HomePage