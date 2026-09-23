import React, { useState } from 'react'
import AdminSidebar from '../Components/AdminSidebar'
import AdminHeader from '../Components/AdminHeader'

function AdminResources() {

  const [currentPage, setCurrentPage] = useState(1)


  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
        </div>
        <div className="col-span-4 p-10">
          <h1 className='text-3xl font-bold text-center my-5'>ALL RESOURCES</h1>
          <div className='flex justify-center items-center my-8 font-medium text-lg gap-5'>
            <p onClick={() => setCurrentPage(1)} className={currentPage == 1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-400 border-b'}>BOOKS</p>
            <p onClick={() => setCurrentPage(2)} className={currentPage == 2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer' : 'p-4 border-gray-400 border-b'}>USERS</p>

          </div>
          {/* tab content */}
          {
            currentPage == 1 &&
            <div className="md:grid grid-cols-4 md:my-0">
              {/* duplicate cards */}
              <div className="shadow rounded p-3 m-4 md:my-0">
                <img width={'100%'} height={'300px'} src="https://tse2.mm.bing.net/th/id/OIP.h-pQ2ym5qcjIRlbsC-V5QQHaG-?r=0&pid=Api&P=0&h=180" alt="" />
                <div className="flex flex-col justify-center items-center mt-4">
                  <h2 className="text-blue-600 font-bold text-xl">Author</h2>
                  <h3 className="text-lg">Title</h3>
                  <p className="font-bold text-red-500">Price</p>
                  {/* approve button */}
                  <button className="bg-green-500 text-white p-2 mt-2 w-full">APPROVE</button>
                </div>
              </div>
            </div>
          }
          {
            currentPage == 2 &&
          <div>
             <div className="md:grid grid-cols-3 my-5 w-full">
                {/* duplicate according to users */}
                <div className="shadow rounded p-3 m-2 bg-blue-100 border">
                  <p className="text-red-500 font-bold text-md">ID:</p>
                  <div className="flex mt-3 items-center">
                    <img width={'80px'} height={'80px'} style={{borderRadius:'50%'}} src="https://tse2.mm.bing.net/th/id/OIP.h-pQ2ym5qcjIRlbsC-V5QQHaG-?r=0&pid=Api&P=0&h=180" alt="" />
                  <div className="flex flex-col ml-3 w-full">
                    <h4 className="text-blue-400 font-bold text-md">Username</h4>
                    <p className="text-xs">Mail</p>
                  </div>
                  </div>
                  
                  
                </div>
              </div>
          </div>
          }
        </div>


      </div>

    </div>


  )
}

export default AdminResources