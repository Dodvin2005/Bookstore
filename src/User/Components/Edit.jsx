import React, { useState } from 'react'
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
        </div>
        </div>
        

        }
    </div>
  )
}

export default Edit