import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
    return (
        <div className='h-screen'>

            <Link to='/home' className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                <i className="text-lg font-bold ri-home-5-line"></i>
            </Link>
            <div className='h-1/2'>
                <img className='w-full h-full object-cover' src='https://www.medianama.com/wp-content/uploads/2018/06/Screenshot_20180619-112715.png.png' alt='image' />
            </div>

            <div className='h-1/2 p-4'>
                <div className='flex items-center justify-between'>
                    <img className='h-12' src='https://imgs.search.brave.com/xQnZFCBTbOZMmPmYDlxjSfEbUiZnZ6N1qn0Y2KgRUk8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/NjE3LzEwMy9zbWFs/bC9jYXItaXNvbWV0/cmljLXN5bWJvbC1j/b2xvci1wbmcucG5n' alt='vehicle image' />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium'>Sarthak</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                        <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
                    </div>
                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className='w-full mt-5'>

                        <div className='flex items-center gap-5 p-3 border-b-2'>
                            <i className="text-lg ri-map-pin-2-fill"></i>
                            <div>
                                <h3 className='text-lg font-medium'>562/11-A</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Destination Location</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-5 p-3'>
                            <i className="ri-currency-line text-lg"></i>
                            <div>
                                <h3 className='text-lg font-medium'>₹125.20</h3>
                                <p className='text-sm -mt-1 text-gray-600'>Cash Cash</p>
                            </div>
                        </div>
                    </div>
                </div>
                <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Make a Payment</button>
            </div>
        </div>
    )
}

export default Riding

