import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
   return (
    <>
    <h1> 404 | page not found</h1>
    </>
  )
}

export default Notfound