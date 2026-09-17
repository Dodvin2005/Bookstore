import React, { useState } from 'react'
import Header from '../Components/Header'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Books() {
  const [toggle, setToggle] = useState(false)

  return (
    <>
      <Header />
      <>
        <div className='flex flex-col items-center justify-center my-5'>
          <h1 className='my-5 font-bold text-3xl'>ALL BOOKS</h1>

          <div className='flex my-5'>
            <input className='p-2  border-gray-300 w-100 rounded' type="text" placeholder='search by book title' />
            <button className='p-3 bg-blue-500 text-white ms-1 rounded'>Search</button>
          </div>
        </div>
        {/* grid filter & book card */}
        <div className="md:gird grid-cols-4 p-4 md:px-40 mb-10">
          {/* filter */}
          <div className="col-span-1">
            <div className="flex justify-between">
              <h1 className="text2xl font-bold">Filter</h1>
              <button onClick={() => setToggle(!toggle)} className="font-bold text-2xl md:hidden"><FaBarsStaggered /></button>
            </div>
            {/* filter category */}
            <div className={toggle ? "block" : "hidden md:block"}>
              <div className="mt-3">
                <input type="radio" name='filter' id='no-filter' />
                <label htmlFor="no-filter" className='ms-3'>All</label>
              </div>
              <div className="mt-3">
                <input type="radio" name='filter' id='filter' />
                <label htmlFor="filter" className='ms-3'>Book-Category</label>
              </div>
            </div>
          </div>
          {/* book card */}
          <div className="col-span-3">
            <div className="md:grid grid-cols-4 md:my-0">
              {/* duplicate cards */}
              <div className="shadow rounded p-3 m-4 md:my-0">
                <img width={'100%'} height={'300px'} src="https://tse2.mm.bing.net/th/id/OIP.h-pQ2ym5qcjIRlbsC-V5QQHaG-?r=0&pid=Api&P=0&h=180" alt="" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <h2 className="text-blue-600 font-bold text-xl">Author</h2>
                  <h3 className="text-lg">Title</h3>
                  <Link to={'/books/:id'} className='font-bold bg-blue-500 p-3 text-white mt-2 rounded'>View Book</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

export default Books