import { configureStore } from "@reduxjs/toolkit";
import eventSlice from '../Slice/EventSlice'

const store = configureStore({
    reducer:{
        eventReducers:eventSlice
    }
})

export default store