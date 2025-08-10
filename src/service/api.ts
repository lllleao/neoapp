import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import md5 from 'blueimp-md5'
import type { Comic, Pagination } from '../types'
const publicKey = import.meta.env.VITE_MARVEL_PUBLIC_KEY
const privateKey = import.meta.env.VITE_MARVEL_PRIVATE_KEY

// A maneira mais segura de fazer esse hash é através de um backend para não expor a chave privada
const generateHash = (ts: string, publicKey: string, privateKey: string) => {
    return md5(ts + publicKey + privateKey)
}

const api = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://gateway.marvel.com/v1/public/'
    }),
    endpoints: (builder) => ({
        getComicsToHero: builder.query<Comic, Pagination>({
            query: ({ limit, offSet }) => {
                const ts = Date.now().toString()
                const hash = generateHash(ts, privateKey, publicKey)

                return `comics?limit=${limit}&offset=${offSet}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
            }
        }),
        getOneComic: builder.query<Comic, string>({
            query: (id) => {
                const ts = Date.now().toString()
                const hash = generateHash(ts, privateKey, publicKey)
                return `comics/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
            }
        })
    })
})

export const { useGetComicsToHeroQuery, useGetOneComicQuery } = api

export default api
