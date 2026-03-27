import React from 'react'

const HomeNew = () => {
  return (
    <div className='relative h-screen'>
      
        <img
          className="w-20 absolute object-contain mix-blend-multiply opacity-90"
          src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
          alt="uber logo"
        />
      
      <div className='h-screen w-screen'>
        <img className='w-full h-full' src='https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png' alt='' />

      </div>

      <div className='bg-white absolute p-5 w-full bottom-0'>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form>
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' type='text' placeholder='Add a pickup location'/>
          <input className='bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full' type='text' placeholder='Add a destination location'/>
        </form>
      </div>
    </div>
  )
}

export default HomeNew
