import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type CartState = {
    isMenuOpen: boolean
}

const initialState: CartState = {
    isMenuOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        openMenu: (state, action: PayloadAction<CartState>) => {
            const { isMenuOpen } = action.payload
            state.isMenuOpen = isMenuOpen
        },
    }
})

export const { openMenu } = cartSlice.actions
export default cartSlice.reducer
