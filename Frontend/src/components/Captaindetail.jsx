import React from 'react'

const Captaindetail = () => {
  return (
    <div>
      <div className='h-2/5 p-6'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center justify-start gap-3'>
                    <img className='h-10 w-10 rounded-full object-cover' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdlMd7stpWUCV0cM50ZApsaF88KzZ_B81Djw&s" alt="captain" />
                    <h4 className='text-lg font-medium'>Harsh Patel</h4>
                </div>
                <div>
                    <h4 className='text-xl font-semibold'>₹295.20</h4>
                    <p className='text-sm text-gray-600'>Earned</p>
                </div>
            </div>

            <div className='flex p-3 mt-8 bg-gray-100 rounded-xl justify-center gap-5 items-start'>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-time-line"></i>
                    <h5 className='text-lg font-medium'>10.2</h5>
                    <p className='text-sm text-gray-600'>Hours Online</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                    <h5 className='text-lg font-medium'>30 KM</h5>
                    <p className='text-sm text-gray-600'>Total Distance</p>
                </div>
                <div className='text-center'>
                    <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                    <h5 className='text-lg font-medium'>20</h5>
                    <p className='text-sm text-gray-600'>Total Jobs</p>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Captaindetail
