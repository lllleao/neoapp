import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { ItemToCart } from '../../types'

type CartState = {
    isMenuOpen: boolean
    items: {
        id: number
        title: string
        price: number
        image: string
    }[]
    total: number
}

type MenuOpen = {
    isMenuOpen: boolean
}

const initialState: CartState = {
    isMenuOpen: false,
    items: [],
    total: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openMenu: (state, action: PayloadAction<MenuOpen>) => {
            const { isMenuOpen } = action.payload
            state.isMenuOpen = isMenuOpen
        },
        addToCart: (state, action: PayloadAction<ItemToCart>) => {
            const item = action.payload
            const isItemExist = state.items.find(({ id }) => id === item.id)
            if (isItemExist) {
                alert('The item is in the cart')
            } else {
                state.items.push(item)
                alert('Item added')
            }
        },
        removeItemFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(
                (item) => item.id !== action.payload
            )
        }
    }
})

export const { openMenu, addToCart, removeItemFromCart } = cartSlice.actions
export default cartSlice.reducer
