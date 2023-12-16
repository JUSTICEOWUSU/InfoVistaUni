import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import { useState } from 'react';
import HomePage from './pages/homePage/homePage';
import { TfiList } from "react-icons/tfi";
function App() {
  const [navbarState, setNavbarState] = useState("translate-x-[100vw] invisible");

  function respondToNavbarState():void{
    if (navbarState === "translate-x-[100vw] invisible") {
      setNavbarState("translate-x-[20vw] sm:translate-x-[15vw] visible");
    } else {
      setNavbarState("translate-x-[100vw] invisible");
    }
  }

  return (
    <Router>
      <div className="p-0 m-0 overflow-hidden w-screen relative">
        {/* NAVIGATIO BAR */}
        <div
          className={`items-left  flex p-6 absolute z-40 bottom-0 top-0  bg-slate-50  flex-col w-screen ${navbarState} transition-all ease-in-out gap-3 lg:relative lg:translate-x-0 lg:flex-row lg:bg-[#fff] lg:w-full lg:visible lg:py-3  lg:justify-between lg:pe-[5vw] lg:ps-15 lg:z-10 lg:border lg:border-b-black`}
        >
          <span className="hidden lg:block">logo</span>
          <div className="flex flex-col gap-3 lg:flex-row lg:justify-around  lg:w-[700px] lg:pr-[2vw]">
            <span className="inline-block text-3xl lg:text-xl cursor-pointer">link 1</span>
            <span className="inline-block text-3xl lg:text-xl cursor-pointer">link 1</span>
            <span className="inline-block text-3xl lg:text-xl cursor-pointer">link 1</span>
            <span className="inline-block text-3xl lg:text-xl cursor-pointer">link 1</span>
          </div>
        </div>
        <TfiList
          className="text-3xl text-slate-900 absolute bottom-5 right-3 z-50 sm:text-4xl sm:bottom-7 sm:right-5 lg:hidden"
          onClick={respondToNavbarState}
        />
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
