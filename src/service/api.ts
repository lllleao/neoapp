import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const authParams = import.meta.env.VITE_MARVEL_PUBLIC_KEY

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gateway.marvel.com/v1/public/',
    }),
    endpoints: (builder) => ({
        getComics: builder.query<void, void>({
            query: () => `comics?apikey=${authParams}`
        })
    })
})

export const { useGetComicsQuery } = api

export default api
