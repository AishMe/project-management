import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface initialStateTypes {
    isSidebarClosed: boolean
    isDarkMode: boolean
}

const initialState: initialStateTypes = {
    isSidebarClosed: false,
    isDarkMode: false
}

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setIsSidebarClosed: (state, action: PayloadAction<boolean>) => {
            state.isSidebarClosed = action.payload
        },
        setIsDarkMode: (state, action: PayloadAction<boolean>) => {
            state.isDarkMode = action.payload
        }
    },
})

export const { setIsSidebarClosed, setIsDarkMode } = globalSlice.actions
export default globalSlice.reducer