import React from 'react'
import Navigation from './navigation'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-between border-b border-primary-900 px-12 py-5'>
      <h1 className='font-bold text-4xl '> <Link href='/'>Artsy</Link> </h1>
      <Navigation/>
    </div>
  )
}

export default Navbar