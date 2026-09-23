import React from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaRegEdit } from 'react-icons/fa'

function AdminSettings() {
  return (
   <div>
      <AdminHeader/>
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
<AdminSidebar/>
        </div>
        <div className="col-span-4 p-10">
<h1 className='text-3xl font-bold text-center mb-10 mt-5'>SETTINGS</h1>  
<div className="md:grid grid-cols-2 items-center gap-10">
  <div>
    <h2 className="text-xl mb-5 font-bold">Welcome, Admin 👋</h2>
    <p className="text-justify">This is your personal administration space where you can manage your account details, system preferences, and platform roles with ease. From here, you can update essential information such as your username, password, contact details, and notification preferences — ensuring your access remains secure and personalized.</p>
    <h4 className="text-lg my-5 font-medium">🔧 What You Can Manage in This Section:</h4>
    <ul>
      <li>✏️ Update personal details (name, email, role, profile picture)</li>
      <li>🔐 Change or reset your password</li>
      <li>📢 Configure notification and alert preferences</li>
      <li>👥 Manage permissions based on assigned access leve</li>
      <li>🧩 Customize dashboard visibility and layout</li>
    </ul>
    <p className="text-justify my-5">Your profile settings help ensure your administrative tools work the way you need them to — securely, efficiently, and with complete control. Thank you for keeping the platform organized and running smoothly. Continue managing, updating, and improving the system — one step at a time. 🚀📚</p>
  </div>


  {/* edit profile part */}
  <div className='flex justify-center items-center flex-col my-5 bg-blue-50 p-5 rounded-xl'>
  <label htmlFor="userProfile">
      <input type="file" id='userProfile'/>
      <img style={{height:'150px',width:'150px'}} className='flex items-center justify-center mx-25' src="https://static.vecteezy.com/system/resources/thumbnails/050/758/789/small_2x/user-icon-on-transparent-background-free-png.png" alt="" />
  </label>
  
  {/* username */}
  <div className="mt-10 mb-3 w-full px-5">
      <input type="text" placeholder='Username' className='w-full border border-gray-200 rounded p-2'/>
  </div>
  
  {/* newpassword */}
  <div className="mt-3 mb-3 w-full px-5">
      <input type="text" placeholder='New Password' className='w-full border border-gray-200 rounded p-2'/>
  </div>
  
  {/* confirm password */}
  <div className="mt-3 mb-3 w-full px-5">
      <input type="text" placeholder='Confirm Password' className='w-full border border-gray-200 rounded p-2'/>
  </div>
  
  
  
  
  {/* reset and update buttons */}
  <div className="flex justify-end w-full px-5 mt-5">
      <button className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
          <button className='bg-green-500 text-white p-3 rounded me-2'>Update</button>
  
  </div>
  
  </div>


  </div>     
 </div>
        
      </div>

    </div>
  )
}

export default AdminSettings