import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import { useState } from 'react';
import HomePage from './pages/homePage/homePage';
import { TfiList } from "react-icons/tfi";
function App() {
  const [navbarState, setNavbarState] = useState("translate-x-[100vw] invisible");

  function respondToNavbarState():void{
    if (navbarState === "translate-x-[100vw] invisible") {
      setNavbarState("translate-x-[75vw] visible");
    } else {
      setNavbarState("translate-x-[100vw] invisible");
    }
  }

  return (
    <Router>
      <div className="p-0 m-0 overflow-hidden">
        <div className= {`items-left pt-2 flex px-3 absolute z-40 bottom-0 top-0  bg-slate-50  flex-col w-[350px] ${navbarState} transition-all ease-in-out`}>
          <span className="inline-block">link 1</span>
          <span className="inline-block">link 1</span>
          <span className="inline-block">link 1</span>
          <span className="inline-block">link 1</span>
        </div>
        <TfiList className="text-3xl text-slate-900 absolute bottom-5 right-3 z-50 sm:text-4xl sm:bottom-7 sm:right-5" onClick={respondToNavbarState} />
        <Routes>
          <Route index element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
