import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers=createAsyncThunk('users/fetchUsers',async()=>{
    const res=await axios.get('https://jsonplaceholder.typicode.com/users')
    return res.data
})


const userSlice=createSlice({
    name:'users',
    initialState:{data:[],isLoading:false,error:null},
    extraReducers:(builder)=>{
        builder

        .addCase(fetchUsers.pending,(state)=>{
            state.isLoading=true;
        })

        .addCase(fetchUsers.fulfilled,(state,action)=>{
            state.data=action.payload;
            state.isLoading=false;
        })

        .addCase(fetchUsers.rejected,(state,action)=>{
            state.error=action.error.message;
            state.isLoading=false
        })
    }
})


export default userSlice.reducer