import React, { useEffect, useState } from 'react'
import { BsCollectionFill } from 'react-icons/bs'
import { FaDatabase } from 'react-icons/fa'
import { IoMdSettings } from 'react-icons/io'
import { Link } from 'react-router-dom'

function AdminSidebar() {

    const [username, setUsername] = useState("")
  const [dp, setDp] = useState("")
      const token = sessionStorage.getItem("token")


  useEffect(() => {
        if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
          const user = JSON.parse(sessionStorage.getItem("user"))
          setDp(user?.picture)
          setUsername(user?.username)
  
        }
      }, [token])
      // console.log(userId);

  return (
    <div className="bg-blue-100 md:min-h-screen h-fit py-10">
      {/* image */}
      <div className="flex justify-center">
        <img style={{width:'150px',height:'150px',borderRadius:'50%'}} src={dp == "" ? "https://static.vecteezy.com/system/resources/previews/020/526/176/large_2x/3d-user-login-or-verification-icon-human-symbol-mobile-ui-ux-app-icons-vector.jpg" : dp.startsWith("")?dp :`${AxiosInstance.defaults.baseURL}/uploads/${dp}`} alt="Admin " />
      </div>
      {/* name */}
      <h3 className="text-xl font-bold my-5 text-center">{username}</h3>
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