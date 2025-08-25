import { createSlice } from "@reduxjs/toolkit";

const darkModeSlice = createSlice({
    name:'darkMode',
    initialState:{mode:'light'},
    reducers:{
        toggle:((state)=>{
            state.mode= state.mode==='light'?'dark':'light'
        })
    }
})

export const {toggle}=darkModeSlice.actions;

export default darkModeSlice.reducer;