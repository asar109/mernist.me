"use client"

import { useRouter } from 'next/navigation'
import React from 'react'






const Blogs = () => {



    const router = useRouter()


  return (
      
    <div>
      <h1>Blogs</h1>
      <button onClick={() => router.push('/blog/1')}>Go to Blog 1</button>
    </div>
      
  )
}

export default Blogs