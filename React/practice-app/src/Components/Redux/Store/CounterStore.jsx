import { configureStore } from "@reduxjs/toolkit";

import Counter from '../Slice/CounterAppSlice'

const store = configureStore({
    reducer:{
        CounterApp:Counter
    }
})

export default store