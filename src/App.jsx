import React, { useRef, useState } from 'react'
import Top from './Pages/Top'
import Middle from './Pages/Middle'
import Bottom from './Pages/Bottom'

const App = () => {
  let [t,setTheme]=useState("light")
  return (
    <div className={`h-screen w-full p-5 flex flex-col gap-5 ${t}`}>
      <Top setTheme={setTheme}/>
      <Middle/>
      <Bottom/>
    </div>
  )
}

export default App