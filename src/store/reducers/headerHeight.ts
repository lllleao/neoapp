import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type HeaderHeightState = {
    height: number
}

const initialState: HeaderHeightState = {
    height: 0
}

const headerHeightSlice = createSlice({
    name: 'headerHeight',
    initialState,
    reducers: {
        changeHeight: (state, action: PayloadAction<HeaderHeightState>) => {
            const newHeight = action.payload.height
            state.height = newHeight
        }
    }
})

export const { changeHeight } = headerHeightSlice.actions
export default headerHeightSlice.reducer
