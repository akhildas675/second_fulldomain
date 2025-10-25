import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers=createAsyncThunk('users/getUsers',async()=>{
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    return res.data
})



const getUsersSlice = createSlice({
    name:'users',
    initialState:{users:[],error:null,isLoading:false},
    extraReducers:(builder)=>{
        builder.addCase(getUsers.pending,(state)=>{
            state.isLoading=true;
        })

        .addCase(getUsers.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.users=action.payload
        })

        .addCase(getUsers.rejected,(state,action)=>{
            state.isLoading=false;
            state.error=action.error.message
        })
    }

    
});

export default getUsersSlice.reducer