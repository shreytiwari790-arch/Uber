import React, { useState } from 'react'
import { Link ,useNavigate} from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'
import HomeNew from '../pages/HomeNew'

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const navigate=useNavigate();

  const {user,setuser}=React.useContext(UserDataContext)

  const submitHandler =async (e) => {
    e.preventDefault();
    const newUser={
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
    }

    const response=await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)

    if(response.status===201){

      const data=response.data
      setuser(data.user)
      localStorage.setItem('token',data.token)

      navigate('/home');
    }

    else{
      window.alert("Invalid users")
      
    }

    console.log(user)

    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
        {/* Uber Text Logo */}
        <div className="top-8 left-8">
          <img
            className="w-20 object-contain mix-blend-multiply opacity-90"
            src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
            alt="uber logo"
          />
        </div>

        <form onSubmit={(e) => submitHandler(e)}>

          <h3 className='text-xl mb-2'>What's your name</h3>
          <div className='flex gap-4 mb-6'>
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
              type="text"
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              required
              className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border text-base placeholder:text-sm'
              type="text"
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>

          <h3 className='text-xl mb-2'>What's your email</h3>
          <input
            required
            type="email"
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
          />

          <h3 className='text-xl mb-2'>Enter Password</h3>
          <input
            type='password'
            required
            className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-base placeholder:text-sm'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='password'
          />

          <button
            className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg'
          >Create New Account</button>

          <p className='text-center'>Already have an account? <Link to='/login' className='text-blue-600'>Login here</Link></p>
        </form>
      </div>

      <div>
        <p className='text-[10px] leading-tight text-gray-500'>
          By proceeding, you consent to get calls, WhatsApp or SMS messages, including by automated means, from Uber and its affiliates to the number provided.
        </p>
      </div>
    </div>
  )
}

export default UserLogin