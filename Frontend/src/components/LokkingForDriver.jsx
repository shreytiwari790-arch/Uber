import React from 'react'

const LokkingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0 text-2xl mb-5 font-bold cursor-pointer'
        onClick={() => props.setVehicleFound(false)}
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className='text-2xl font-semibold mb-5'>Looking for a Driver</h3>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <img className='h-32' src={props.vehicleType?.image || 'https://imgs.search.brave.com/xQnZFCBTbOZMmPmYDlxjSfEbUiZnZ6N1qn0Y2KgRUk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NjE3LzEwMy9zbWFs/bC9jYXItaXNvbWV0/cmljLXN5bWJvbC1j/b2xvci1wbmcucG5n'} alt='vehicle image' />
        <div className='w-full mt-5'>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="ri-map-pin-user-fill text-lg"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.pickup || "Pickup Location"}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3 border-b-2'>
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className='text-lg font-medium'>562/11-A</h3>
              <p className='text-sm -mt-1 text-gray-600'>{props.destination || "Destination Location"}</p>
            </div>
          </div>
          <div className='flex items-center gap-5 p-3'>
            <i className="ri-currency-line text-lg"></i>
            <div>
              <h3 className='text-lg font-medium'>{props.vehicleType?.price || '₹125.20'}</h3>
              <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
            </div>
          </div>
        </div>
        <button onClick={() => {
            // Further action like setVehicleFound(true)
            props.setconfirmPanelOpen(false)
            
        }} className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm {props.vehicleType?.name || 'Ride'}</button>
      </div>
    </div>
  )
}

export default LokkingForDriver
