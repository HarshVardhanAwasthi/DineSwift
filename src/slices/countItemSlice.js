import { createSlice } from "@reduxjs/toolkit";

const countItemSlice=createSlice({
    name:"countItem",
    initialState:{
        value:1
    },
    reducers:{
        increment:(state,action)=>{
            state.value++
        }
    }
})

export  const {increment}=countItemSlice.actions;
export default  countItemSlice.reducer