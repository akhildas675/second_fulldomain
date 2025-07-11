import {createSlice} from '@reduxjs/toolkit'

const CounterSlicer=createSlice({
    name:'CounterApp',
    initialState:{
        count:0
    },
    reducers:{
        increment:(state)=>{
            state.count+=1
        },
        decrement:(state)=>{
            state.count-=1
        },
        reset:(state)=>{
            state.count=0
        }

    }
})

export const {increment,decrement,reset}=CounterSlicer.actions

export default CounterSlicer.reducer