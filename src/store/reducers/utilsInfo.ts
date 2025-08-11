import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

type UtilsInfoState = {
    height: number
    copyRight: string
    isRare: string
}

const initialState: UtilsInfoState = {
    height: 0,
    copyRight: '',
    isRare: ''
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
        },
        addIsRare: (state, action: PayloadAction<string>) => {
            state.isRare = action.payload
        }
    }
})

export const { changeHeight, addCopyRight, addIsRare } = utilsInfo.actions
export default utilsInfo.reducer
