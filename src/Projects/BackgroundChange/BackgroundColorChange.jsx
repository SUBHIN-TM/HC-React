import { useState } from "react"

 const BackgroundColorChange = () => {
  const [color,setColor]=useState('bg-gray-500')
  return (
  
   <div className={`w-full h-screen flex justify-center items-end pb-6 ${color}`}>
  <div className="flex gap-5 ">
    <button className="border p-2 font-semibold" onClick={()=>setColor('bg-red-500')}>RED</button>
    <button className="border p-2 font-semibold" onClick={()=>setColor('bg-green-500')}>GREEN</button>
    <button className="border p-2 font-semibold" onClick={()=>setColor('bg-blue-500')}>BLUE</button>
    <button className="border p-2 font-semibold" onClick={()=>setColor('bg-gray-500')}>RESET</button>
    
  </div>
   </div>
   
  )
}

export default BackgroundColorChange