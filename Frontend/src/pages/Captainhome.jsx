import React from 'react'
import { Link } from 'react-router-dom'
import Captaindetail from '../components/Captaindetail'

const Captainhome = () => {

  return (
    <div className='h-screen'>
        {/* Header */}
        <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
            <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="uber logo" />
            <Link to='/captain-login' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-medium ri-logout-box-r-line"></i>
            </Link>
        </div>

        {/* Map Image Background */}
        <div className='h-3/5'>
            <img className='h-full w-full object-cover' src="https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png" alt="map" />
        </div>

        {/* Bottom Details Panel */}
        <Captaindetail/>

        
    </div>
  )
}

export default Captainhome
