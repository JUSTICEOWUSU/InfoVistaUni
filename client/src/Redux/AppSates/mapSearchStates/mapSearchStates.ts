import { createSlice,PayloadAction } from "@reduxjs/toolkit";
interface GeoSearchResult {
  x: number, // lon,
  y: number, // lat,
  label: String, // formatted address
}

interface InitialSates {
  searchData: GeoSearchResult[];
}

const initialState:InitialSates = {
    searchData:[]
}
const mapStates = createSlice({
    name:'mapStates',
    initialState,
    reducers:{
        updateSearchData:(state,{payload})=>{
            state.searchData=payload
        }
    }
})

const mapReducer = mapStates.reducer
const {updateSearchData} = mapStates.actions
export {
    mapReducer,
    updateSearchData
}
