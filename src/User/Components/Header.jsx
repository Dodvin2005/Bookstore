import React, { useState } from 'react'
import { FaFacebook, FaInstagram } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'
import { IoMdLogIn, IoMdMenu, IoMdClose } from 'react-icons/io'
import { Link } from 'react-router-dom'

function Header() {

  const [toggle, setToggle] = useState(false)

  return (
    <>
      {/* ================= HEADER TOP PART ================= */}
      <div className="grid grid-cols-2 md:grid-cols-3 p-5 shadow-md items-center">

        {/* Logo */}
        <div className="flex items-center">

          <img width="50px" height="50px"className="rounded-full object-cover shadow"
            src="https://static.vecteezy.com/system/resources/previews/021/644/208/large_2x/books-stacked-on-top-of-each-other-created-with-generative-ai-photo.jpg"
            alt="books"/>

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

          <Link to="/login" className="border border-black rounded px-3 py-1 ms-3 flex items-center gap-1 hover:bg-black hover:text-white transition duration-300"  >
            <IoMdLogIn />
            Login
          </Link>

        </div>

      </div>


      {/* ================= NAVIGATION PART ================= */}
      <nav className="w-full bg-gray-900 text-white">

        <div className="w-full px-5 py-3">

          {/* Mobile Navigation Top */}
          <div className="flex justify-between items-center md:hidden">

            {/* Menu Button */}
            <button onClick={() => setToggle(!toggle)} className="text-2xl hover:text-gray-300 transition duration-300" >

              {toggle ? <IoMdClose /> : <IoMdMenu />}

            </button>


            {/* Mobile Login */}
            <Link to="/login" className="border border-white rounded px-3 py-1 flex items-center gap-1 hover:bg-white hover:text-black transition duration-300" >

              <IoMdLogIn />
              Login

            </Link>

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
                className="block py-2 px-5 hover:bg-white hover:text-black rounded transition duration-300"
              >
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