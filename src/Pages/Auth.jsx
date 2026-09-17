import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Auth({ insideRegister }) {

  const [toggle, setToggle] = useState(false)

  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/login2.png)]  bg-cover bg-center text-blue-500' >
      <div className="p-10">
        <h1 className="text-center font-bold text-3xl">BOOKSTORE</h1>
        <div style={{ width: '450px' }} className="bg-gray-800 text-white p-5 flex justify-center items-center flex-col my-5">
          <div style={{ width: '80px', height: '80px', borderRadius: '50%' }} className="border mb-5 flex justify-center items-center">
            <FaUser className='text-3xl' />
          </div>
          <h1 className='3xl'>{insideRegister ? "Register" : "Login"}</h1>
          <form className="my-5 w-full">

            {/* username */}
            {
              insideRegister &&
              <input className='bg-white p-2 w-full rounded my-5 text-blue-900' type="text" placeholder='Username' />
            }

            {/* email */}
            <input className='bg-white p-2 w-full rounded my-5 text-blue-900' type="text" placeholder='Enter your Email' />

            {/* password */}
            <input className='bg-white p-2 w-full rounded my-5  text-blue-900' type={toggle ? "text" : "password"} placeholder='Enter your password' />
            {
              toggle ?
                <FaEyeSlash onClick={() => setToggle(!toggle)} className='text-gray-400 cursor-pointer' style={{ marginTop: '-50px', marginLeft: '380px' }} />
                :
                <FaEye onClick={() => setToggle(!toggle)} className='text-gray-400 cursor-pointer' style={{ marginTop: '-50px', marginLeft: '380px' }} />
            }

            {/* forgotpassword */}
            <div className="flex justify-between mb-5">
              <p className="text-xs text-orange-300">Never Share your password</p>
              {
                !insideRegister &&
                <button className='text-xs underline'>Forgot password</button>
              }
            </div>


            {/* login/register button */}
            <div className="text-center">
              {
                insideRegister?
                <button className="bg-green-500 p-2 w-full sounded">Register</button>
                :
                <button className="bg-green-500 p-2 w-full sounded">Login</button>

              }
            </div>

            
            {/* google login */}
            {
              !insideRegister &&
              <div className="my-5 text-center">
                --------------OR-------------
                <div className='my-2 flex justify-center items-center w-full'>google Authentication

                </div>
              </div>
            }
            {/* new already */}
            <div className="text-center my-5">
              {
                insideRegister ?
                <p className="text-blue-300">Existing user? <Link to={'/login'} className='underline ms-5'>Login</Link></p>
                :
               <p className="text-blue-300">New user? <Link to={'/register'} className='underline ms-5'>Register</Link></p>

              }
            </div>
          
          </form>

          
        </div>
      </div>

    </div>
  )
}

export default Auth
