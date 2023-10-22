import React from 'react'

export default function Navbar() {
  return (
    <div className='flex flex-row justify-center space-x-20 bg-black text-white h-16 items-center'>
      <h1 className='cursor-pointer'>Home</h1>
      <h1 className='cursor-pointer'>Skills</h1>
      <h1 className='cursor-pointer'>Projects</h1>
      <h1 className='cursor-pointer'>CV</h1>
    </div>
  )
}

