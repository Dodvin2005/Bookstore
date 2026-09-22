import React from 'react'
import { FaPlus } from 'react-icons/fa'

function UploadBook() {
  return (
    <div className='p-10 my-20 mx-5 bg-blue-100 rounded-2xl'>
<h1 className="text-center text-3xl font-medium">Upload Book Details</h1>
<div className="md:grid grid-cols-2 mt-10 w-full">
    <div className="px-3">
        <div className="mb-3">
            <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Author' className='w-full p-2 rounded bg-white'/>
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Book Cover Image URL' className='w-full p-2 rounded bg-white'/>
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
        </div>
    </div>
  

  <div className="px-3">
        
        <div className="mb-3">
            <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
        </div>
        <div className="mb-3">
            <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white'/>
        </div>
        {/* upload book */}
        <div className='mb-3 flex justify-center items-center mt-10'>
            <label htmlFor="bookImage">
                <input type="file" id='bookImage'/>
                <img style={{height:'200px',width:'250px'}} className='flex items-center justify-center mx-25 rounded-2xl' src="https://images.pexels.com/photos/5821/hands-hand-book-reading.jpg?cs=srgb&dl=pexels-kaboompics-com-5821.jpg&fm=jpg" alt="" />
            </label>
        </div>
        {/* preview of upload books */}
        <div className="flex justify-center items-center">
            <img width={'70px'} height={'70px'} src="https://images.pexels.com/photos/5821/hands-hand-book-reading.jpg?cs=srgb&dl=pexels-kaboompics-com-5821.jpg&fm=jpg" alt="" />
            <label htmlFor="bookUpload">
                <input type="file" id='bookUpload' hidden/>
                <FaPlus className='text-3xl ms-2'/>
            </label>
        </div>
    </div>

</div>
<div className="flex md:justify-end justify-center w-full px-5 mt-5">
    <button className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
        <button className='bg-green-500 text-white p-3 rounded me-2'>Add Book</button>

</div>
    </div>
  )
}

export default UploadBook