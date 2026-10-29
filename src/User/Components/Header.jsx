import React, { useContext, useEffect, useState } from 'react'
import { FaFacebook, FaInstagram, FaPowerOff } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { IoMdLogIn, IoMdMenu, IoMdClose, IoMdSettings } from 'react-icons/io'
import { Link, useNavigate } from 'react-router-dom'
import AxiosInstance from '../../Api/AxiosInstance'
import { routeContext } from '../../contextAPI/RouteGuard'


function Header() {

  const [toggle, setToggle] = useState(false)
  const { role, setRole, authorisedUser, setAuthorisedUser } = useContext(routeContext)

  const navigate = useNavigate()

  

  // keeping token
  const [token, setToken] = useState("")
  const [dp, setDp] = useState("")
  const [userId, setUserId] = useState("")
  const [dropDown, setDropDown] = useState(false)

const logout = ()=>{
    sessionStorage.clear()
    setAuthorisedUser(false)
    setToggle = false
    setToken = ""
    setDp = ""
    setUserId = ""
    setDropDown = false
    navigate('/')
  }

  useEffect(() => {
    if (sessionStorage.getItem("token") && sessionStorage.getItem("user")) {
      const userToken = sessionStorage.getItem("token")
      const user = JSON.parse(sessionStorage.getItem("user"))
      setToken(userToken)
      setDp(user.picture)
      setUserId(user._id)
    }
  }, [token])
  console.log(userId);


  return (
    <>
      {/* ================= HEADER TOP PART ================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 p-5 shadow-md items-center">

        {/* Logo */}
        <div className="flex items-center">

          <img width="50px" height="50px" className="rounded-full object-cover shadow"
            src="https://static.vecteezy.com/system/resources/previews/021/644/208/large_2x/books-stacked-on-top-of-each-other-created-with-generative-ai-photo.jpg"
            alt="books" />

        </div>


        {/* Title */}
        <div className="hidden md:flex justify-center items-center">

          <h1 className="text-3xl font-bold tracking-wider">
            BOOKSTORE
          </h1>

        </div>


        {/* Social Media + Login */}
        <div className="hidden md:flex justify-end items-center gap-4">

          <FaInstagram
            className="text-xl cursor-pointer hover:scale-125 transition duration-300"
          />

          <FiTwitter
            className="text-xl cursor-pointer hover:scale-125 transition duration-300"
          />

          <FaFacebook
            className="text-xl cursor-pointer hover:scale-125 transition duration-300"
          />

          {/* login link */}
          {
            !token ?
              <Link to="/login" className="border border-black rounded px-3 py-1 ms-3 flex items-center gap-1 hover:bg-black hover:text-white transition duration-300"  >
                <IoMdLogIn />
                Login
              </Link>
              :
              <div>
                <button onClick={() => setDropDown(!dropDown)} className='shadow-sm rounded p-1 hover:bg-gray-100'>
                  <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={dp == "" ? "https://static.vecteezy.com/system/resources/previews/020/526/176/large_2x/3d-user-login-or-verification-icon-human-symbol-mobile-ui-ux-app-icons-vector.jpg" : dp.startsWith("") ? dp : `${AxiosInstance.defaults.baseURL}/uploads/${dp}`} alt="profile Icon" />
                </button>
                {/* drop down */}
                {
                  dropDown &&
                  <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:outline-hidden">
                    <Link to={`/profile/${userId}`} className='flex items-center text-gray-600 text-sm px-3 py-2'><IoMdSettings className='me-1' /> Profile</Link>
                    <button onClick={logout} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaPowerOff className='me-1' /> Logout</button>

                  </div>
                }
              </div>
          }

        </div>

      </div>


      {/* ================= NAVIGATION PART ================= */}
      <nav className="w-full bg-gray-900 text-white">

        <div className="w-full px-5 py-3">

          {/* Mobile Navigation Top */}
          <div className="flex justify-between items-center md:hidden">

            {/* Menu Button */}
            <button onClick={() => setToggle(!toggle)} className="text-2xl hover:text-gray-300 transition duration-300" >


            </button>


            {/* Mobile Login */}
            {
              !token ?
              <Link to="/login" className="border border-white rounded px-3 py-1 flex items-center gap-1 hover:bg-white hover:text-black transition duration-300" >
               <IoMdLogIn />
                Login </Link>
                :
                <div>
                <button onClick={() => setDropDown(!dropDown)} className='shadow-sm rounded p-1 hover:bg-gray-100'>
                  <img width={'40px'} height={'40px'} style={{ borderRadius: '50%' }} src={dp == "" ? "https://static.vecteezy.com/system/resources/previews/020/526/176/large_2x/3d-user-login-or-verification-icon-human-symbol-mobile-ui-ux-app-icons-vector.jpg" : dp.startsWith("https://lh3.googleusercontent.com/") ? dp : `${AxiosInstance.defaults.baseURL}/uploads/${dp}`} alt="profile Icon" />
                </button>
                {/* drop down */}
                {
                  dropDown &&
                  <div className="absolute right-0 z-10 mt-2 w-40 bg-white shadow rounded ring-1 ring-black/5 p-2 focus:outline-hidden">
                    <Link to={`/profile/${userId}`} className='flex items-center text-gray-600 text-sm px-3 py-2'><IoMdSettings className='me-1' /> Profile</Link>
                    <button onClick={logout} className='flex items-center text-gray-600 text-sm px-3 py-2'><FaPowerOff className='me-1' /> Logout</button>

                  </div>
                }
              </div>
            }

          </div>


          {/* Navigation Links */}
          <ul className={`  ${toggle ? "flex" : "hidden"}  md:flex flex-col md:flex-row justify-center  items-center gap-2 md:gap-10 mt-3 md:mt-0 `} >

            {/* Home */}
            <li>

              <Link
                to="/"
                onClick={() => setToggle(false)}
                className="block py-2 px-5 hover:bg-white hover:text-black rounded transition duration-300"
              >
                Home
              </Link>

            </li>


            {/* Books */}
            <li>

              <Link
                to="/books"
                onClick={() => setToggle(false)}
                className="block py-2 px-5 hover:bg-white hover:text-black rounded transition duration-300">
                Books
              </Link>

            </li>


            {/* Contact */}
            <li>

              <Link
                to="/contact"
                onClick={() => setToggle(false)}
                className="block py-2 px-5 hover:bg-white hover:text-black rounded transition duration-300" >
                Contact
              </Link>

            </li>

          </ul>

        </div>

      </nav>

    </>
  )
}

export default Header