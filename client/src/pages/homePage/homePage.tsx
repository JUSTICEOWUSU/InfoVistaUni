import React,{useState} from 'react'
import Sidebar from '../../components/sections/navberSection/sidebar/sidebar'
import Map from '../../components/sections/mapSection/map'
// import Input from '../../components/inputs/input';
import { updateSearchData } from '../../Redux/AppSates/mapSearchStates/mapSearchStates';
import { OpenStreetMapProvider } from "leaflet-geosearch";
import { useDispatch } from 'react-redux';
// import { CiSearch } from "react-icons/ci";

const provider = new OpenStreetMapProvider();
function HomePage() {
  const dispatch = useDispatch()
  const [searchValue,setSearchValue] = useState("")

  // SEARCHBAR ONCHANGE FUNCTION
  const onChange = (e: React.ChangeEvent<HTMLInputElement>):void => {
    setSearchValue( e.target.value );
  };

const onSearchClick = async () =>{
  console.log( " on search is working " ) 
  if( !searchValue ){
      return;
  }
  try {
    const results = await provider.search({ query: searchValue });
    console.log(results);
    return dispatch(updateSearchData(results));
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error("Error during geosearch:", error.message);
    } else {
      console.error("Unknown error occurred:", error);
    }
  }

          
}

  return (
    <div className=" h-screen w-screen  relative">
      {/* Search bar */}
      {/* <span className="border  border-black mb-1 inline-block absolute z-20 top-5 right-2 bg-white pr-1">
        <Input className="w-90 outline-none text-left h-7 p-1 appearance-none" type={"text"} value={searchValue} onChange={onChange}/>
        <CiSearch className="inline-block" onClick={onSearchClick}/>
      </span> */}

      {/* DASHBOARD */}
      <div className=" w-full relative h-full sm:flex z-10">
        <div className="absolute bottom-0 top-20 left-0 z-20 sm:block sm:w-2/12 sm:relative sm:z-auto sm:border border-slate-300 sm:top-0 lg:w-[220px] lg:z-10 lg:border-t-0 border-l-0">
          <Sidebar />
        </div>
        <div className=" w-full   h-full">
          <Map />
        </div>
      </div>
    </div>
  );
}

export default HomePage