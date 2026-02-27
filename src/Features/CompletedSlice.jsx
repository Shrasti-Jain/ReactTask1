import {createSlice} from '@reduxjs/toolkit'

let CompletedSlice=createSlice({
    name:"completed",
    initialState:{
        completed:[],
        completeCount:0
    },
    reducers:{
      add:(state,action)=>{
   state.completed=[...state.completed,action.payload]
   state.completeCount++
      },
      remove:(state)=>{
        let len=state.completed.length
        state.completeCount=state.completeCount-len
        state.completed=[]
      }
    }
})
export let {add,remove}=CompletedSlice.actions
export default CompletedSlice.reducer;