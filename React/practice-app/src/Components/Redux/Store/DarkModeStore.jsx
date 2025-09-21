import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "../Slice/DarkModeSlice";

export const store6 =configureStore({
    reducer:{
        changeMode:DarkModeSlice
    }
})