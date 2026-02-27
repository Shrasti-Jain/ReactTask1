import React from 'react'

const Top = ({setTheme}) => {

  return (
    <div className='border-2  px-5 py-2'>
       <div className='flex items-center justify-between'>
        <div>
          <h1>Task Board</h1>
          <h1>Minimal Worklog</h1>
           <button className='border-2 p-2'>App Rerenders: <span>0</span></button>
        </div>
       <select onChange={(e)=>{setTheme(e.target.value)
       }}>
        <option  value="light">Light</option>
        <option value="dark">Dark</option>
       </select>
      </div>
    </div>
  )
}

export default Top