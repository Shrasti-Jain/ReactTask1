import {configureStore} from '@reduxjs/toolkit'
import taskReducer from '../Features/TaskSlice'
import completedReducer from '../Features/CompletedSlice'
export let Store=configureStore({
   reducer:{
     task:taskReducer,
     completed:completedReducer
   }
})