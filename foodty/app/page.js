import { UserButton } from '@clerk/nextjs'
import React from 'react'

function Homepage() {
  return (
    <div>Holaaa has logrado entrar
      <UserButton afterSignOutUrl='/'/>
    </div>
    
  )
}

export default Homepage