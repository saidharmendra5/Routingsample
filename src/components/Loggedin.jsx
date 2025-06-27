import React, { useContext } from 'react'
import { IsAuthContext } from '../Context/Authcontext'

const Loggedin = () => {
  const { username} = useContext(IsAuthContext);
  return (
    <div>
      <h2>welcome {username}</h2>
    </div>
  )
}

export default Loggedin