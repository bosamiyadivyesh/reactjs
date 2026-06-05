import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid,username}=useParams()
    
  return (
        <div className='bg-gray-600 text-white text-3xl p-4'>User:{username},{userid}</div>

  )
}

export default User