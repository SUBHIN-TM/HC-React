import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <>
     <div className='font-bold text-xl'>Home</div>
     <button className='border bg-green-700'>
        <Link to='/about'>About Button
        </Link>
     </button>
    </>
   
    
  )
}

export default Home