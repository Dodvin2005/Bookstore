import React, { useState } from 'react'
import Header from '../Components/Header'
import { FaRegCheckCircle } from 'react-icons/fa'
import Edit from '../Components/Edit'

function Profile() {

  const [currentPage,setCurrentPage] = useState(1)
  return (
<>
<Header />
<div style={{height:'200px'}} className='bg-gray-900'></div>
  <div style={{width:'230px',height:'230px',borderRadius:'50%',marginTop:'-130px',marginLeft:'70px'}} className='bg-white p-3'>
<img style={{width:'200px',height:'200px',borderRadius:'50%'}} src="https://www.mimembers.au/api/Website/DownloadFile?FileGuid=abebcd8a-5dbe-4c1b-8614-9d512a1f4c8f#EXT=.jpg" alt="user" />
  
</div>
<div className="md:flex justify-between px-5">
  <div className="flex items-center">
    <h1 className="text-2xl font-black md:text-3xl ">Username</h1>
    <FaRegCheckCircle className="text-blue-700 ms-3"/>
  </div>
  <div>
    <Edit/>
  </div>
</div>
<p className="text-justify md:px-20 px-5 my-5">
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, et dignissimos molestiae optio eaque quo nesciunt a mollitia impedit! Quis optio voluptas ea quo labore eos, et odit illo ab. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam, soluta architecto voluptates repellat, quis consequatur blanditiis, velit tenetur quas eveniet voluptatibus possimus enim eos necessitatibus veniam ipsa perspiciatis nihil nemo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates expedita quod eius quo aut, ad aperiam molestiae, ducimus deserunt dolorem nesciunt nisi tenetur doloribus, corporis eveniet facere sint dolores ut? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, facere dolorum quos illo quibusdam sit quidem rerum molestiae ducimus amet voluptatibus, perferendis beatae consequuntur quod ex? Architecto necessitatibus illo aperiam.
</p>
<div className='md:px-40'>
  {/* tabs */}
  <div className='flex justify-center items-center my-8 font-medium text-lg gap-5'>
<p onClick={()=>setCurrentPage(1)} className={currentPage==1 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-400 border-b'}>Upload Book</p>
<p onClick={()=>setCurrentPage(2)} className={currentPage==2 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-400 border-b'}>Upload Book Status</p>
<p onClick={()=>setCurrentPage(3)} className={currentPage==3 ? 'p-4 border-gray-200 border-l border-t border-r rounded cursor-pointer':'p-4 border-gray-400 border-b'}>Purchase history</p>

  </div>
  {/* tab content */}
  {
    currentPage==1 &&
    <div>Upload Book</div>
  }
   {
    currentPage==2 &&
    <div>Upload Book status</div>
  }
   {
    currentPage==3 &&
    <div>purchase history</div>
  }
</div>

</> 
 )
}

export default Profile