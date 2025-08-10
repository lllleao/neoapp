import { configureStore } from '@reduxjs/toolkit'
import headerHeightReducer from './reducers/utilsInfo'
import cartReducer from './reducers/cart'
import api from '../service/api'

const store = configureStore({
    reducer: {
        headerHeight: headerHeightReducer,
        cart: cartReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
