import React, { useEffect, useState } from 'react'
import Form from './Form'
import { useDispatch, useSelector } from 'react-redux'
import TaskCard from '../Components/TaskCard'
import CompletedCard from '../Components/CompletedCard'
import { remove } from '../Features/CompletedSlice'
import { removeTask } from '../Features/TaskSlice'


const Bottom = () => {
      let {task}=useSelector((state)=>state.task)
      let {completed}=useSelector((state)=>state.completed)
      let [show,setShow]=useState(null)
      let dispatch=useDispatch()
      let fn=()=>{
        dispatch(remove())
        dispatch(removeTask(completed))
      }
  return (
    <div className='flex gap-5'>
          <Form/>

          <div className='border-2 p-5 flex flex-col gap-2'>
            <div className='border-2 p-3 flex gap-5'>
              <button onClick={()=>setShow("all")}  className='border-2 p-3'>All</button>

              <button onClick={()=>setShow("active")} className='border-2 p-3'>Active</button>

              <button onClick={()=>setShow("completed")} className='border-2 p-3'>Completed</button>

              <button onClick={()=>{
                fn()
                setShow("clear")}} className='border-2 p-3'>Clear Completed </button>
            </div>

             <div className='border-2'>
        {
    show === "all" ? <div className='flex flex-col gap-2 '>
               <h1>All Tasks</h1>

              {
                task.map((e,i)=>{
                  return <TaskCard key={i} e={e}/>
                })
              }
          </div> :
    show === "active" ? <h1>Active</h1> :
    show === "completed" ? <div className='flex flex-col gap-2 '>
          <h1>Completed Tasks</h1>
          {
             completed.map((e,i)=>{
                return <CompletedCard key={i} e={e}/>
             })
          }
    </div>
        :
    show === "clear" ? <div className=' p-2'>
        <h1>Cleared</h1>
    </div>:
    <div className='flex flex-col gap-2 '>
               <h1>All Tasks</h1>

              {
                task.map((e,i)=>{
                  return <TaskCard key={i} e={e}/>
                })
              }
          </div>
  }
</div>
          </div>
        </div>
  )
}

export default Bottom