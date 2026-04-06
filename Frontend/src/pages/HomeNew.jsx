import React, { useState, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import LocationMap from './locationmap';
import Vehicle from '../components/Vehicle';
import ConfirmRide from '../components/ConfirmRide';
import LokkingForDriver from '../components/LokkingForDriver';

const HomeNew = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const vehiclepanelref = useRef(null)
  const [vehiclepanelOpen, setvehiclepanelOpen] = useState(false)
  const [confirmPanelOpen, setconfirmPanelOpen] = useState(false)
  const [vehicleType, setVehicleType] = useState(null)
  const [vehicleFound, setVehicleFound] = useState(false)



  const panelRef = useRef(null)
  const containerRef = useRef(null)
  const confirmPanelRef = useRef(null)
  const vehicleFoundPanelRef = useRef(null)
   // Controls the sliding white box

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

  useGSAP(() => {
    if (confirmPanelOpen) {
      gsap.to(confirmPanelRef.current, {
        y: 0,
        duration: 0.5
      })
    } else {
      gsap.to(confirmPanelRef.current, {
        y: "100%",
        duration: 0.5
      })
    }
  }, [confirmPanelOpen])

  useGSAP(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundPanelRef.current, {
        y: 0,
        duration: 0.5
      })
    } else {
      gsap.to(vehicleFoundPanelRef.current, {
        y: "100%",
        duration: 0.5
      })
    }
  }, [vehicleFound])

  



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
        <Vehicle 
          setvehiclepanelOpen={setvehiclepanelOpen} 
          setconfirmPanelOpen={setconfirmPanelOpen} 
          setVehicleType={setVehicleType}
        />
      </div>

      <div ref={confirmPanelRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12'>
          <ConfirmRide 
            setconfirmPanelOpen={setconfirmPanelOpen} 
            setVehicleFound={setVehicleFound}
            vehicleType={vehicleType} 
            pickup={pickup} 
            destination={destination} 
          />
      </div>

      <div ref={vehicleFoundPanelRef} className='fixed w-full z-10 translate-y-full bottom-0 bg-white px-3 py-6 pt-12'>
          <LokkingForDriver 
            setVehicleFound={setVehicleFound}
            setconfirmPanelOpen={setconfirmPanelOpen} 
            vehicleType={vehicleType} 
            pickup={pickup} 
            destination={destination} 
          />
      </div>

    </div>


  )
}

export default HomeNew