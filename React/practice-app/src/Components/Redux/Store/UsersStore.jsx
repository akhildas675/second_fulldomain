import { configureStore } from "@reduxjs/toolkit";
import userSlice from '../Slice/UsersSlice'

export const store11=configureStore({
    reducer:{
        users:userSlice
    }
})