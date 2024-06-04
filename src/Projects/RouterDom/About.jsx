import React from 'react'

import { Link } from 'react-router-dom'
const About = () => {
  return (
    <>
    <div className='font-bold text-xl'>ABOUT</div>
    <button className='border bg-green-700'>
       <Link to='/'>Back to home Button
       </Link>
    </button>
   </>
  )
}

export default About