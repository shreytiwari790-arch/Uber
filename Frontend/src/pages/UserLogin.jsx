import React from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
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
            <form>
                <h3 className='text-xl mb-2'>What's your email</h3>
                <input
                    required
                    type="email"
                    placeholder='email@example.com'
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base' />
                <h3 className='text-xl mb-2'>Enter password</h3>
                <input
                    type='password'
                    required
                    className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
                    placeholder='password' />
                <button
                    className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
                >Login</button>
                <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
            </form>
           </div>

           <div>
            <button className='bg-[#10b461] text-white font-semibold mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</button>
           </div>
        </div>
    )
}

export default UserLogin
