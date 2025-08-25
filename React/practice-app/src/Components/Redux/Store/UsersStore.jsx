import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Slice/UsersSlice'

export const store=configureStore({
    reducer:{
        users:userSlice
    }
})