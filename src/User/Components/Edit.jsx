import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { IoMdCloseCircleOutline } from 'react-icons/io'
import { TiEdit } from 'react-icons/ti'

function Edit() {
    const [offCanvas,setOffCanvas]=useState(false)
  return (
    <div>
        {/* button */}
        <button onClick={()=>setOffCanvas(true)} className='bg-black text-white p-2 flex items-center rounded border hover:bg-white hover:text-black'><TiEdit className='me-2' />Edit</button>
        {/* off canvas */}
        {
            offCanvas &&
        <div>
            <div className="fixed inset-0 bg-gray-400/75 w-full h-full"></div>
            <div className="bg-white h-full w-90 z-10 fixed top-0 left-0">
            {/* header */}
            <div className="bg-black text-white px-3 py-4 flex justify-between text-2xl">
                <h1>Update User profile</h1>
                <IoMdCloseCircleOutline onClick={()=>setOffCanvas(false)} />
            </div>

{/* body */}
<div className='flex justify-center items-center flex-col my-5'>
<label htmlFor="userProfile">
    <input type="file" id='userProfile'/>
    <img style={{height:'150px',width:'150px'}} className='flex items-center justify-center mx-25' src="https://static.vecteezy.com/system/resources/thumbnails/050/758/789/small_2x/user-icon-on-transparent-background-free-png.png" alt="" />
   <button className="bg-black text-white px-3 py-4 rounded z-53 fixed" style={{marginLeft:'250px',marginTop:'-29px'}}><FaRegEdit /></button>
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

{/* bio */}
<div className="mt-3 mb-3 w-full px-5">
    <input type="text" placeholder='Bio' className='w-full border border-gray-200 rounded p-2'/>
</div>


{/* reset and update buttons */}
<div className="flex justify-end w-full px-5 mt-5">
    <button className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
        <button className='bg-green-500 text-white p-3 rounded me-2'>Update</button>

</div>

</div>

        </div>
        </div>
        

        }
    </div>
  )
}

export default Edit