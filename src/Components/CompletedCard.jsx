import React from 'react'

const CompletedCard = ({e}) => {
  return (
    <div className='border-2 p-3 flex justify-between'>
           <div className='flex flex-col gap-2'>
               <h1>{e.name}</h1>
               <h6>{e.detail}</h6>
           <h5>{e.prior}</h5>
           </div>
       </div>
  )
}

export default CompletedCard
