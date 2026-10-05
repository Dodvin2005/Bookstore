import { useFormik } from 'formik'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash, FaUser } from 'react-icons/fa'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import { loginAPI, registerAPI } from '../Services/AllApi'
  import { ToastContainer, toast } from 'react-toastify';


function Auth({ insideRegister }) {
  const Navigate = useNavigate()
  const [toggle, setToggle] = useState(false)


  const formik = useFormik({
    initialValues: {
      username: "Username",
      email: "",
      password: ""
    },
    validationSchema: Yup.object({
      username: Yup.string().min(3, "Must be altleast 3 characters").required("Required"),
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string().required("Required"),

    }),
    onSubmit: (values,resetForm) => {
      console.log(values);
     
      if(insideRegister){
        console.log("Register API call");
        handleRegister(values)
        
      }else{
        console.log("Login API call");
        handleLogin(values)
      }
      resetForm()
    }
  })


const handleLogin = async (userData)=>{
  const result = await loginAPI(userData)
  console.log(result);
  if(result.status==200){
    toast.success("Successfully logged in...!!!")
    sessionStorage.setItem("token",result.data.token)
    sessionStorage.setItem("user",JSON.stringify(result.data.user))
   setTimeout(()=>{
     if(result.data.user.role == "admin"){
      Navigate('/admin')
    }else{
      Navigate('/')
    }
   },2500)
  }else{
    toast.error(result)
  }
  
}

  const handleRegister = async(userData)=>{
    const result = await registerAPI(userData)
    console.log(result);
    if(result.status==201){
      toast.success("Successfully Registered.. Please Login!!")
    }else{
      toast.error(result)
     
    }
     Navigate=('/login')
  }



  return (
    <div className='w-full min-h-screen flex justify-center items-center bg-[url(/login2.png)]  bg-cover bg-center text-blue-500' >
      <div className="p-10">
        <h1 className="text-center font-bold text-3xl">BOOKSTORE</h1>
        <div style={{ width: '450px' }} className="bg-gray-800 text-white p-5 flex justify-center items-center flex-col my-5">
          <div style={{ width: '80px', height: '80px', borderRadius: '50%' }} className="border mb-5 flex justify-center items-center">
            <FaUser className='text-3xl' />
          </div>
          <h1 className='3xl'>{insideRegister ? "Register" : "Login"}</h1>


          <form onSubmit={formik.handleSubmit} className="my-5 w-full">

            {/* username */}
            {
              insideRegister &&


              <>
                <input value={formik.values.username} onChange={formik.handleChange} className='bg-white p-2 w-full rounded my-5 text-blue-900' type="text" placeholder='Username' name='username' />
                <div className='mb-5 text-yellow-400'>{formik.errors.username}</div>
              </>
            }


            {/* email */}
            <input value={formik.values.email} onChange={formik.handleChange} className='bg-white p-2 w-full rounded my-5 text-blue-900' type="text" placeholder='Enter your Email' name='email' />
            <div className='mb-5 text-yellow-400'>{formik.errors.email}</div>


            {/* password */}
            <input value={formik.values.password} onChange={formik.handleChange} className='bg-white p-2 w-full rounded my-5  text-blue-900' type={toggle ? "text" : "password"} placeholder='Enter your password' name='password' />
            <div className='mb-5 text-yellow-400'>{formik.errors.password}</div>

            {
              toggle ?
                <FaEyeSlash  onClick={() => setToggle(!toggle)} className='text-gray-400 cursor-pointer' style={{ marginTop: '-50px', marginLeft: '380px' }} />
                :
                <FaEye onClick={() => setToggle(!toggle)} className='text-gray-400 cursor-pointer' style={{ marginTop: '-50px', marginLeft: '380px' }} />
            }

            {/* forgotpassword */}
            <div className="flex justify-between mb-5">
              <p className="text-xs text-orange-300">Never Share your password</p>
              {
                !insideRegister &&
                <button  className='text-xs underline'>Forgot password</button>
              }
            </div>



            {/* login/register button */}
            <div className="text-center">
              {
                insideRegister ?
                  <button type='submit' className="bg-green-500 p-2 w-full sounded">Register</button>
                  :
                  <button type='submit' className="bg-green-500 p-2 w-full sounded">Login</button>

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

<ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </div>
  )
}

export default Auth
