import Link from 'next/link'
import React from 'react'

const Navigation = () => {
  return (
    <div>
      <ul className='flex '>
        <li><Link className='hover:text-accent-400 transition-colors' href="/">Home</Link> </li>
        <li className='px-6 hover:text-accent-400 transition-colors'><Link href="#">Auctions</Link> </li>
        <li><Link className='hover:text-accent-400 transition-colors' href="#">Marketplace</Link> </li>
      </ul>
    </div>
  )
}

export default Navigation
