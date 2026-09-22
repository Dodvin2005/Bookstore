import React from 'react'
import { IoLogOut } from 'react-icons/io5'

function AdminHeader() {
  return (
<>
{/* Header top */}
<div className="flex justify-between items-center p-3 md:mx-20">
  <div className="flex items-center">
    <img width={'80px'} height={'80px'}  src="https://img.icons8.com/nolan/1200/user-default.jpg" alt="" />
    <h1 className='text-2xl font-bold ms-2'>BOOKSTORE</h1>
  </div>
  <button className="flex items-center px-3 py-2 bg-black text-white rounded border-black hover:bg-white hover:text-black">Logout <IoLogOut className='ms-2' /></button>
</div>
{/* header marquee */}
<div className="w-full p-3 bg-black text-white">
  <marquee >Welcome Admin,You are all set to manage and monitor the system. Lets get into work!!</marquee>
</div>
</>  
)
}

export default AdminHeader