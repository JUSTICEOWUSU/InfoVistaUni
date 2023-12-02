import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const OSMAPIQueries = createApi({
  reducerPath: "OSMAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "/",
  }),
  endpoints: (build) => ({

    fetchPlaces: build.query({
      query: (route) => ({
        url: `${route}`,
      }),
    }),

  }),
});

const {useFetchPlacesQuery} = OSMAPIQueries

export {
    useFetchPlacesQuery
}