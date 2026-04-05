import React, { useState } from 'react'

const LocationMap = ({ setvehiclepanelOpen ,setpanelOpen}) => {
  const [selected, setSelected] = useState(null)

  const locations = [
    "Western Kutchery Rd, Lalkurti Bazaar, Meerut, Uttar Pradesh 250001",
    "Western Kutchery Rd, Kachori Bazaar, Meerut, Uttar Pradesh 250001",
    "Western Kutchery Rd, Lalkurti Bazaar, Meerut, Uttar Pradesh 250001"
  ]

  return (
    <div className='mt-5 ml-5'>
      {locations.map((loc, index) => (
        <div
          key={index}
          onClick={() => {
            setSelected(index)
            setvehiclepanelOpen(true)
            setpanelOpen(false)
          }}
          className={`flex items-center gap-2 rounded-xl border-2 p-2 justify-start mb-3 cursor-pointer transition-all duration-200
          ${selected === index ? 'border-black bg-gray-100' : 'border-gray-300'}`}
        >
          <i className="ri-map-pin-line"></i>
          <p className='mb-4'>{loc}</p>
        </div>
      ))}
    </div>
  )
}

export default LocationMap