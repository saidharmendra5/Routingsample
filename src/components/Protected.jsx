import React from 'react'
import { Navigate } from 'react-router-dom'


const Protected = ({isauth , children}) => {
    

    if(isauth){
        return children;
    }
    return <Navigate to="/login/user" replace /> ;
}

export default Protected