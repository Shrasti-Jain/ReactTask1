import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTask } from '../Features/TaskSlice'
import { add } from '../Features/CompletedSlice'

const TaskCard = ({e}) => {
  let dispatch=useDispatch()
  let {completed}=useSelector((state)=>state.completed)
  let find=completed.find((val)=>val.name==e.name)
  let [tick,SetTick]=useState(false)
  return (
    <div className='border-2 p-3 flex justify-between'>
        <div className='flex flex-col gap-2'>
            <input checked={find} onChange={(elem)=>{
               SetTick(true)
               elem.target.checked? dispatch(add(e)):null
            }} type="checkbox"/>
            {
              tick?<h1 className='line-through'>{e.name}</h1>:<h1>{e.name}</h1>
            }
            <h6>{e.detail}</h6>
        <h5>{e.prior}</h5>
        <h6>00:00</h6>
        </div>
       <div className='flex gap-2'>
         <button className='border-2 p-2'>Start</button>
        <button onClick={()=>dispatch(deleteTask(e))} className='border-2 p-2'>Delete</button>
       </div>

    </div>
  )
}

export default TaskCard