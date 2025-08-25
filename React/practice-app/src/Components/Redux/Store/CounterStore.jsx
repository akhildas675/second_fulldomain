import { configureStore } from "@reduxjs/toolkit";

import CounterReducer from '../Slice/CounterAppSlice'


export const store1=configureStore({
    reducer:{
        counter:CounterReducer
    }
})