import React, { useState, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import LocationMap from './locationmap';

const HomeNew = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const vehiclepanelref = useRef(null)
  const [vehiclepanelOpen, setvehiclepanelOpen] = useState(false)

  const panelRef = useRef(null)
  const containerRef = useRef(null) // Controls the sliding white box

  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function () {
    if (panelOpen) {
      // Slide the entire white container up to fill 100% of screen
      gsap.to(containerRef.current, {
        height: '100%',
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

  useGSAP(() => {
    if (vehiclepanelOpen) {
      gsap.to(vehiclepanelref.current, {
        y: 0,
        duration: 0.5
      })
    } else {
      gsap.to(vehiclepanelref.current, {
        y: "100%",
        duration: 0.5
      })
    }
  }, [vehiclepanelOpen])



  return (
    <div className='relative h-screen w-screen overflow-hidden bg-gray-200'>
      {/* Uber Logo */}
      <img
        className={`w-20 absolute left-5 top-5 object-contain z-10 ${panelOpen ? 'hidden' : 'block'}`}
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

        <LocationMap vehiclepanelOpen={vehiclepanelOpen} setvehiclepanelOpen={setvehiclepanelOpen} setpanelOpen={setpanelOpen} />


      </div>

      <div ref={vehiclepanelref} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>

        <div className="flex w-full p-3 border-2 border-gray-300 active:border-black rounded-xl mb-2 items-center justify-between" >
          <img className='h-20' src='https://imgs.search.brave.com/xQnZFCBTbOZMmPmYDlxjSfEbUiZnZ6N1qn0Y2KgRUk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NjE3LzEwMy9zbWFs/bC9jYXItaXNvbWV0/cmljLXN5bWJvbC1j/b2xvci1wbmcucG5n' alt='image' />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i class="ri-user-line"></i>4</span> </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹125.20</h2>
        </div>

        <div className="flex w-full p-3 border-2 border-gray-300 active:border-black rounded-xl mb-2 items-center justify-between">
          <img className='h-20' src='https://imgs.search.brave.com/uaMafWwTeIfv6X-t0kWZD5IerjqrppJDKPi9QqQM-0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEyNC9vdXJt/aWQvcG5ndHJlZS0z/ZC1zY29vdGVyLWRl/bGl2ZXJ5LXBuZy1p/bWFnZV8xMTQ4Mzcx/OS5wbmc' alt='image' />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i class="ri-user-line"></i>1</span> </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,Motorcycle ride</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹65.90</h2>
        </div>

        <div className="flex w-full p-3 border-2 border-gray-300 active:border-black rounded-xl mb-2 items-center justify-between">
          <img className='h-20' src='https://imgs.search.brave.com/x6IGLuBn5ZV-wMl5oiXZNb6J1IeuqgxS70IAdQUwDM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/MDI2LzU1NS9zbWFs/bC92aWJyYW50LXll/bGxvdy1hdXRvLXJp/Y2tzaGF3LXdpdGgt/b3Blbi1pbnRlcmlv/ci1wbmcucG5n' alt='image' />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Auto <span><i class="ri-user-line"></i>4</span> </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,Auto ride</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹65.90</h2>
        </div>


      </div>
    </div>


  )
}

export default HomeNew