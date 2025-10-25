import { configureStore } from "@reduxjs/toolkit";
import eventSlice from '../Slice/EventSlice'

const store11 = configureStore({
    reducer:{
        eventReducers:eventSlice
    }
})

export default store11