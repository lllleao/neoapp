import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type UtilsInfoState = {
    height: number
    copyRight: string
}

const initialState: UtilsInfoState = {
    height: 0,
    copyRight: ''
}

const utilsInfo = createSlice({
    name: 'headerHeight',
    initialState,
    reducers: {
        changeHeight: (state, action: PayloadAction<number>) => {
            const newHeight = action.payload
            state.height = newHeight
        },
        addCopyRight: (state, action: PayloadAction<string>) => {
            state.copyRight = action.payload
        }
    }
})

export const { changeHeight, addCopyRight } = utilsInfo.actions
export default utilsInfo.reducer
