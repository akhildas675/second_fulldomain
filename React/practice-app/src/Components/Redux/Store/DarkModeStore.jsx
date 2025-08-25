import { configureStore } from "@reduxjs/toolkit";

import themeReducer from '../Slice/DarkModeSlice'


export const store2=configureStore({
    reducer:{
        theme:themeReducer
    }
})