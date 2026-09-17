import React from 'react'
import { Link } from 'react-router-dom'

function Pnf() {
  return (
    <>
    <div className='my-5 min-h-screen items-center justify-center flex flex-col'>
      <img className='w-100' src="https://csp.in/static/media/404.1a4a7d60d8c0a9910236.jpg" alt="page not found" />
      <p>Ohh Noo!!!</p>
      <h2 className="text-2xl font-medium">Looks like You are Lost</h2>
      <p>the page you are looking for is not available</p>
      <Link to={'/'} className='bg-black mt-5 px-3 py-2 text-white'>Back to Home</Link>
    </div>
    </>
  )
}

export default Pnf