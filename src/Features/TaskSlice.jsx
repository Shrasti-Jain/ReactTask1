import {createSlice} from '@reduxjs/toolkit'

let TaskSlice=createSlice({
    name:"task",
    initialState:{
        task:[],
        count:0
    },
    reducers:{
      addtask:(state,action)=>{
         state.task=[...state.task,action.payload]
         state.count++
      },
      deleteTask:(state,action)=>{
        let update=state.task.filter((e)=>e.name!=action.payload.name);
        state.task=update;
        state.count--
      },
     removeTask: (state, action) => {
  let update = state.task.filter((e) =>
    !action.payload.some((val) => val.name === e.name)
  )
  state.task=update;
  state.count=update.length
}
    }
})
export let {addtask,deleteTask,removeTask}=TaskSlice.actions
export default TaskSlice.reducer;