import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import SearchAppBar  from './SearchBar'
function Navbar() {
  return (
    <header className='w-full relative z-10' >
        <SearchAppBar/>
    </header>
  )
}

export default Navbar