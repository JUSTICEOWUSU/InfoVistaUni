import { OSMAPIQueries } from './APIQueries/openStreetMapQueries';
import { configureStore } from "@reduxjs/toolkit";

const reduxStore = configureStore({
    reducer:{
        [OSMAPIQueries.reducerPath]:OSMAPIQueries.reducer
    }
})

export type StoreTypes =  ReturnType<typeof reduxStore.getState>

export default reduxStore