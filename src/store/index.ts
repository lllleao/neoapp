import { configureStore } from '@reduxjs/toolkit'
import utilsInfoReducer from './reducers/utilsInfo'
import cartReducer from './reducers/cart'
import api from '@/service/api'

const store = configureStore({
    reducer: {
        utilsInfo: utilsInfoReducer,
        cart: cartReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
