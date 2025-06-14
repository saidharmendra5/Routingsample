import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
   return (
    <>
    <h1> 404 | page not found</h1>
    <button className="btn" onClick={() => navigate('/')}> home</button>
    </>
  )
}

export default Notfound