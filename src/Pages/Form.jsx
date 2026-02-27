import React, { useState } from 'react'
import {useForm} from 'react-hook-form'
import {useDispatch} from 'react-redux'
import { addtask } from '../Features/TaskSlice'

const Form = () => {
    let {handleSubmit,reset,register}=useForm()
    let dispatch=useDispatch()
    let handleForm=(data)=>{
        dispatch(addtask(data))
        reset({ prior: "Low",name:"",detail:"" })
        reset()
    }
  return (
    <div className='w-1/2 border-2 p-3'>
      <form  className='flex flex-col gap-5' onSubmit={handleSubmit(handleForm)
      }>
        <h1>Add task</h1>
   <input required {...register("name")} className='border-2 p-2' type="text"  placeholder='Enter Task'/>
   <input required {...register("detail")} className='border-2 p-2' type="text" placeholder='Enter description'/>
   <select  {...register("prior")} className='border-2 p-2'>
    <option value="Low">Low</option>
    <option value="Medium">Medium</option>
    <option value="High">High</option>
   </select>
   <button className='border-2'>Add tAsk</button>
      </form>
    </div>
  )
}

export default Form