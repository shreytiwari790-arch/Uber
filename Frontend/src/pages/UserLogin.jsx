import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../Styles/Userlogin.css"
import axios from 'axios'
import { UserDataContext } from '../context/UserContext'

const UserLogin = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState('');
    const [userData, setUserData] = useState({});

    const navigate = useNavigate();

    const { user, setuser } = React.useContext(UserDataContext)

    const submithandler = async (e) => {
        e.preventDefault();

        const newuser = {
            email,
            password,
        }

        try {
            const response = await axios.post(
                `${import.meta.env.VITE_BASE_URL}/users/login`,
                newuser
            )
            const data=response.data

            console.log("SUCCESS:", response.data)

            if (response.status === 201) {
                setuser(response.data.user)
                localStorage.setItem('token',data.token)
                navigate('/home')
            }

        } catch (err) {
            console.log("ERROR:", err.response?.data?.message)
            alert(err.response?.data?.message) // optional
        }

        setemail('')
        setpassword('')
    }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>

            <div >
                <div className="top-8 left-8">
                    <img
                        className="w-20 object-contain mix-blend-multiply opacity-90"
                        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
                        alt="uber logo"
                    />
                </div>
                <form onSubmit={(e) => {
                    submithandler(e)
                }}>
                    <h3 className='text-xl mb-2'>What's your email</h3>
                    <input
                        required
                        type="email"
                        placeholder='email@example.com'
                        value={email}
                        onChange={(e) => {
                            setemail(e.target.value)
                        }}
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' />
                    <h3 className='text-xl mb-2'>Enter password</h3>
                    <input
                        type='password'
                        required
                        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={password}
                        onChange={(e) => {
                            setpassword(e.target.value)
                        }}
                        placeholder='password' />
                    <button
                        className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                    >Login</button>
                    <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
                </form>
            </div>

            <div>
                <Link to='/captain-login' className=' flex items-center justify-center bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</Link>
            </div>
        </div>
    )
}

export default UserLogin
