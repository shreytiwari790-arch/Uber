import React from 'react'

const Vehicle = (props) => {
  return (
    <div>
      <div className='mb-2'>
          <h5 className='absolute top-3 text-xl left-1/2 -translate-x-1/2 text-3xl p-2 mb-2'
            onClick={() => props.setvehiclepanelOpen(false)}
          >
            <i className="ri-arrow-down-long-line"></i>
          </h5>
        </div>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>

        <div onClick={()=>{
            props.setconfirmPanelOpen(true)
            props.setVehicleType({
              image: 'https://imgs.search.brave.com/xQnZFCBTbOZMmPmYDlxjSfEbUiZnZ6N1qn0Y2KgRUk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NjE3LzEwMy9zbWFs/bC9jYXItaXNvbWV0/cmljLXN5bWJvbC1j/b2xvci1wbmcucG5n',
              name: 'UberGo',
              price: '₹125.20'
            })
        }} className="flex w-full p-3 border-2 border-gray-300 active:border-black rounded-xl mb-2 items-center justify-between" >
          <img className='h-20' src='https://imgs.search.brave.com/xQnZFCBTbOZMmPmYDlxjSfEbUiZnZ6N1qn0Y2KgRUk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NjE3LzEwMy9zbWFs/bC9jYXItaXNvbWV0/cmljLXN5bWJvbC1j/b2xvci1wbmcucG5n' alt='image' />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>UberGo <span><i className="ri-user-line"></i>4</span> </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹125.20</h2>
        </div>

        <div onClick={()=>{
            props.setconfirmPanelOpen(true)
            props.setVehicleType({
              image: 'https://imgs.search.brave.com/uaMafWwTeIfv6X-t0kWZD5IerjqrppJDKPi9QqQM-0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEyNC9vdXJt/aWQvcG5ndHJlZS0z/ZC1zY29vdGVyLWRl/bGl2ZXJ5LXBuZy1p/bWFnZV8xMTQ4Mzcx/OS5wbmc',
              name: 'Moto',
              price: '₹65.90'
            })
        }} className="flex w-full p-3 border-2 border-gray-300 active:border-black rounded-xl mb-2 items-center justify-between">
          <img className='h-20' src='https://imgs.search.brave.com/uaMafWwTeIfv6X-t0kWZD5IerjqrppJDKPi9QqQM-0U/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmcu/cG5ndHJlZS5jb20v/cG5nLXZlY3Rvci8y/MDI0MDEyNC9vdXJt/aWQvcG5ndHJlZS0z/ZC1zY29vdGVyLWRl/bGl2ZXJ5LXBuZy1p/bWFnZV8xMTQ4Mzcx/OS5wbmc' alt='image' />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-line"></i>1</span> </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,Motorcycle ride</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹65.90</h2>
        </div>

        <div onClick={()=>{
            props.setconfirmPanelOpen(true)
            props.setVehicleType({
              image: 'https://imgs.search.brave.com/x6IGLuBn5ZV-wMl5oiXZNb6J1IeuqgxS70IAdQUwDM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/MDI2LzU1NS9zbWFs/bC92aWJyYW50LXll/bGxvdy1hdXRvLXJp/Y2tzaGF3LXdpdGgt/b3Blbi1pbnRlcmlv/ci1wbmcucG5n',
              name: 'Auto',
              price: '₹118.21'
            })
        }} className="flex w-full p-3 border-2 border-gray-300 active:border-black rounded-xl mb-2 items-center justify-between">
          <img className='h-20' src='https://imgs.search.brave.com/x6IGLuBn5ZV-wMl5oiXZNb6J1IeuqgxS70IAdQUwDM8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNzUv/MDI2LzU1NS9zbWFs/bC92aWJyYW50LXll/bGxvdy1hdXRvLXJp/Y2tzaGF3LXdpdGgt/b3Blbi1pbnRlcmlv/ci1wbmcucG5n' alt='image' />
          <div className='w-1/2'>
            <h4 className='font-medium text-base'>Auto <span><i className="ri-user-line"></i>3</span> </h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable,Auto ride</p>
          </div>
          <h2 className='text-2xl font-semibold'>₹118.21</h2>
        </div>
    </div>
  )
}

export default Vehicle
