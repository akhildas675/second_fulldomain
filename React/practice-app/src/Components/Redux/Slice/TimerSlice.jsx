import { createSlice } from "@reduxjs/toolkit";

const timerSlice = createSlice({
    name:"timer",
    initialState:{
        count:0,
        running:false
    },
    reducers:{
        start:(state)=>{
            state.running=true
        },
        stop:(state)=>{
            state.running=false
        },
        reset:(state)=>{
            state.running=false
            state.count=0
        },
        tick:(state)=>{
            state.count=state.count+1
        }
        
    }

})

export const {start,stop,tick,reset}=timerSlice.actions

export default timerSlice.reducer