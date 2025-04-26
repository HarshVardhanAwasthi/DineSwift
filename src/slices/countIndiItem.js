import { createSlice } from "@reduxjs/toolkit";

const countIndiItemSlice=createSlice({
    name:"countIndiItem",
    initialState:{
        value:1
    },
    reducers:{
        increment:(state,action)=>{
            state.value++
        },
        decrement:(state,action)=>{
            if (state.value===1) {
                state.value=1
            }
            else{
                state.value--
            }
        }
        
    }
})

export  const {increment,decrement}=countIndiItemSlice.actions;
export default  countIndiItemSlice.reducer