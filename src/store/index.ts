import { configureStore } from '@reduxjs/toolkit'
import headerHeightReducer from './reducers/headerHeight'
import api from '../service/api'

const store = configureStore({
    reducer: {
        headerHeight: headerHeightReducer,
        [api.reducerPath]: api.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
