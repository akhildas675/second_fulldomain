import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
    name:'eventCounter',
    initialState:{value:0},
    reducers:{
        increment:(state)=>{
            state.value+=1
        }
    },



})

export const {value,increment}=eventSlice.actions;

export default eventSlice.reducer

