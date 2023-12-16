import { OSMAPIQueries } from './APIQueries/openStreetMapQueries';
import { mapReducer } from './AppSates/mapSearchStates/mapSearchStates';
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
    reducer:{
        mapStates : mapReducer,
        [OSMAPIQueries.reducerPath]:OSMAPIQueries.reducer
    }
})

export type StoreTypes =  ReturnType<typeof reduxStore.getState>

export default reduxStore