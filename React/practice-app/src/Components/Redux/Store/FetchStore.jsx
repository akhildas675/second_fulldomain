import { configureStore } from "@reduxjs/toolkit";
import getUserSlice from '../Slice/FetchSlice'



export const store =configureStore({
    reducer:{
        userData:getUserSlice
    }
})