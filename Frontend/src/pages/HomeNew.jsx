import React, { useState, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

const HomeNew = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  
  const panelRef = useRef(null)
  const containerRef = useRef(null) // Controls the sliding white box

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      // Slide the entire white container up to fill 70% of screen
      gsap.to(containerRef.current, {
        height: '70%',
        padding: 24,
        duration: 0.5
      })
    } else {
      // Slide back down to only show inputs (30%)
      gsap.to(containerRef.current, {
        height: '30%',
        padding: 20,
        duration: 0.5
      })
    }
  }, [panelOpen])

  return (
    <div className='relative h-screen w-screen overflow-hidden bg-gray-200'>
      {/* Uber Logo */}
      <img
        className="w-20 absolute left-5 top-5 object-contain z-10"
        src="https://download.logo.wine/logo/Uber/Uber-Logo.wine.png"
        alt="uber logo"
      />

      {/* Full Screen Background Map */}
      <div className='absolute inset-0 w-full h-full'>
        <img 
          className='w-full h-full object-cover' 
          src='https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png' 
          alt='map' 
        />
      </div>

      {/* The Sliding Container */}
      <div ref={containerRef} className='bg-white absolute bottom-0 w-full h-[30%] flex flex-col'>
        
        {/* Input Section (Header) */}
        <div className='p-5 relative'>
          {/* Close button that appears when open */}
          {panelOpen && (
            <h5 
              onClick={() => setpanelOpen(false)}
              className='absolute top-2 right-5 text-2xl font-bold cursor-pointer'
            >
              ↓
            </h5>
          )}
          
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          
          <form className='relative mt-3' onSubmit={submitHandler}>
            <div className='absolute top-7 left-4 h-14 w-1 bg-gray-700 rounded-full'></div>
            <input
              onClick={() => setpanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3 focus:outline-none' 
              type='text' 
              placeholder='Add a pickup location' 
            />
            <input
              onClick={() => setpanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full focus:outline-none' 
              type='text' 
              placeholder='Add a destination location' 
            />
          </form>
        </div>

        {/* The Result Panel (Red section - now hidden when collapsed) */}
        <div ref={panelRef} className={`flex-1 overflow-y-auto bg-red-500 p-5 ${panelOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className='text-white'>
            <p className='mb-4'>Suggested Location 1...</p>
            <p className='mb-4'>Suggested Location 2...</p>
            <p>Suggested Location 3...</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomeNew