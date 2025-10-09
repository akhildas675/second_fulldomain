import { configureStore } from "@reduxjs/toolkit";

import timerSlice from '../Slice/TimerSlice'

export const store5=configureStore({
    reducer:{
        timer:timerSlice
    }
})