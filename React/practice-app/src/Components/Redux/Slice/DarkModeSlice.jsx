import { createSlice } from "@reduxjs/toolkit";

const darkMode = createSlice({
    name: 'DarkMode',
    initialState: { mode: "light" },
    reducers: {
        toggle: ((state) => {
            state.mode = state.mode === 'light' ? "dark" : "light"
        })

    }
})



export const { toggle } = darkMode.actions;

export default darkMode.reducer

