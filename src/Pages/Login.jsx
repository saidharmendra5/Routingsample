import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import Loginform from '../components/Loginform'

const Login = () => {
  const navigate = useNavigate()
  return (
    <div>
        <h1>
           <NavLink to='user'>Login</NavLink> | <NavLink to='newuser'>Register</NavLink>
        </h1>
        <br />
        <hr />
        <br />
        <Outlet />
        
    </div>
  )
}

export default Login