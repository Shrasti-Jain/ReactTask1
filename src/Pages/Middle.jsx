import React from 'react'
import {useSelector} from 'react-redux'

const Middle = () => {
  let {count}=useSelector((state)=>state.task)
  let {completeCount}=useSelector((state)=>state.completed)
  return (
   <div className='flex gap-5'>
      <div className='border-2 p-2'>
        <h1>Total</h1>
        <h5>{count}</h5>
      </div>
      <div className='border-2 p-2'>
        <h1>Active</h1>
        <h5>0</h5>
      </div>
      <div className='border-2 p-2'>
        <h1>Completed</h1>
        <h5>{completeCount}</h5>
      </div>
      <div className='border-2 p-2'>
        <h1>Total time</h1>
        <h5>00:00</h5>
      </div>
    </div>
  )
}

export default Middle