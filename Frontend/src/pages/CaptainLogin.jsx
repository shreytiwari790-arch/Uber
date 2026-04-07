import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CaptainLogin = () => {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState('');
    
    const navigate = useNavigate();

    const submithandler = async (e) => {
        e.preventDefault();
        
        const loginData = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captain/login`, loginData)
            if (response.status === 200) {
                const data = response.data
                localStorage.setItem('token', data.token)
                navigate('/captainhome')
            }
        } catch (err) {
            console.log(err)
            alert(err.response?.data?.message || err.response?.data?.errors?.[0]?.msg || "Failed to login captain")
        }
        
        setemail('');
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
            <form onSubmit={(e)=>{
                submithandler(e)
            }}>
                <h3 className='text-xl mb-2'>What's Our Captains Email</h3>
                <input
                    required
                    type="email"
                    placeholder='email@example.com'
                    value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }}
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' />
                <h3 className='text-xl mb-2'>Enter password</h3>
                <input
                    type='password'
                    required
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    value={password}
                    onChange={(e)=>{
                        setpassword(e.target.value)
                    }}
                    placeholder='password' />
                <button
                    className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                >Login</button>
                <p className='text-center'>New here? <Link to='/captain-signup' className='text-blue-600'>Create new Account</Link></p>
            </form>
           </div>

           <div>
            <Link to='/login' className=' flex items-center justify-center bg-[#FFA500] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as User</Link>
           </div>
        </div>
    )
}

export default CaptainLogin
