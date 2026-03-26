import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const UserLogout = () => {

    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
    console.log("Logout triggered")

    localStorage.removeItem('token')
    navigate('/login', { replace: true })
}, [])// 👈 runs only once

    return (
        <div>
            Logging out...
        </div>
    )
}

export default UserLogout