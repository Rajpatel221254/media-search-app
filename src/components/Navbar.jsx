import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-(--c3) flex justify-between items-center px-10 py-5'>
      <h1 className='text-2xl font-bold'>Media Search</h1>
      <div className='flex gap-5'>
        <Link className='text-base bg-(--c4) px-4 py-2 font-medium rounded active:scale-95 text-(--c1)' to='/'>Search</Link>
        <Link className='text-base bg-(--c4) px-4 py-2 font-medium rounded active:scale-95 text-(--c1)' to='/collection'>Collecion</Link>
      </div>
    </div>
  )
}

export default Navbar
