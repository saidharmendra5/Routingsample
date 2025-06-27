import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import {  IsAuthContext } from '../Context/Authcontext';


const Protected = ({ children}) => {
    const {isauth} = useContext(IsAuthContext)

    if(isauth){
        return children;
    }
    return <Navigate to="/login/user" replace /> ;
}

export default Protected