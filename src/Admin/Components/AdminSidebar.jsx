import React from 'react'
import { BsCollectionFill } from 'react-icons/bs'
import { FaDatabase } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { Link } from 'react-router-dom'

function AdminSidebar() {
  return (
    <div className="bg-blue-100 md:min-h-screen h-fit py-10">
      {/* image */}
      <div className="flex justify-center">
        <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src="https://img.freepik.com/premium-photo/professional-males-colleagues-hd-8k-wallpaper-stock-photographic-image_1033957-29162.jpg" alt="Admin" />
      </div>
      {/* name */}
      <h3 className="text-xl font-bold my-5 text-center">Name</h3>
      {/* links */}
    <div className="mt-10 flex flex-col justify-center items-center">
      <div className="mt-3">
        <Link to={'/admin'} className='flex items-center'><FaDatabase className='me-2' />Dashboard</Link>
      </div>
       <div className="mt-3">
        <Link to={'/adminresources'} className='flex items-center'><BsCollectionFill className='me-2' />Collections</Link>
      </div>
       <div className="mt-3">
        <Link to={'/adminsettings'} className='flex items-center'><IoMdSettings className='me-2' />Settings</Link>
      </div>
    </div>
    </div>
  )
}

export default AdminSidebar