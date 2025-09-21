import { configureStore } from "@reduxjs/toolkit";

import timerSlice from '../Slice/TimerSlice'

export const store=configureStore({
    reducer:{
        timer:timerSlice
    }
})