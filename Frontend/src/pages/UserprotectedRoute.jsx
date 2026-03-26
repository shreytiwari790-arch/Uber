import React from 'react'
import UserDataContext from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import { useContext,useEffect } from 'react'

const UserprotectedRoute = ({children}) => {

    const token=localStorage.getItem('token')
    const navigate=useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [token])

    

  return (
    <>
    {children}
    </>
  )
}

export default UserprotectedRoute
