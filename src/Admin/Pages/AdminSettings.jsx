import React, { useEffect, useState } from 'react'
import AdminHeader from '../Components/AdminHeader'
import AdminSidebar from '../Components/AdminSidebar'
import { FaRegEdit } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';
import AxiosInstance from '../../Api/AxiosInstance';
import { ToastContainer, toast } from 'react-toastify';
import { adminUpdateAPI } from '../../Services/AllApi';


function AdminSettings() {
  const navigate = useNavigate();
  const [offCanvas, setOffCanvas] = useState(false)
  const [userDetails, setUserDetails] = useState({
    username: "", password: "", cPassword: "", bio: "", picture: "", role: "", id: ""
  })
  const [existingPicture, setExistingPicture] = useState("")
  const [preview, setPreview] = useState("")
  const [passwordMatch, setPasswordMatch] = useState(true)
  const [imageFile, setImageFile] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      const user = JSON.parse(sessionStorage.getItem("user"))
      setUserDetails({ ...userDetails, username: user.username, role: user.role, bio: user.bio, id: user._id })
      setExistingPicture(user.picture)
    }
  }, [])

  console.log(userDetails);
  // console.log(existingPicture);

  const handleFileUpload = (e) => {

    const imageFile = e.target.files[0]

    if (imageFile.type.startsWith("images/")) {
      setUserDetails({ ...userDetails, picture: e.target.files[0] });

      const url = URL.createObjectURL(e.target.files[0]);

      setPreview(url);
      setImageFile(true)
    } else {
      setImageFile(false)

    }

  }

  const checkPassword = (data) => {
    setUserDetails({ ...userDetails, cPassword: data })
    userDetails.password == data ? setPasswordMatch(true) : setPasswordMatch(false)
  }

  const resetProfile = () => {
    const user = JSON.parse(sessionStorage.getItem("user"))
    setUserDetails({ ...userDetails, username: user.username, role: user.role, bio: user.bio, id: user._id })
    setExistingPicture(user.picture)
    setPreview("")
    setImageFile(false)
    setPasswordMatch(true)
  }

  const handleUpdateUser = async () => {
    const { username, password, cPassword, picture, id } = userDetails
    if (!username || !password || !cPassword ) {
      toast.info("please fill th form completely")

    } else if (passwordMatch) {
      const reqBody = new FormData()
      for (let key in userDetails) {
        if (key != "picture") {
          reqBody.append(key, userDetails[key])
        } else {
          preview ? reqBody.append("picture", picture) : reqBody.append("picture", existingPicture)
        }
      }

      // api call
      const result = await adminUpdateAPI(id, reqBody)
      console.log(result);
      if (result.status == 200) {
        toast.success("admin Profile updated successfully!!!Please login")
        setTimeout(() => {
          sessionStorage.clear()
          navigate('/login')
        }, 2000)
      }

    }
  }

  return (
    <div>
      <AdminHeader />
      <div className="md:grid grid-cols-5 gap-2">
        <div className="col-span-1">
          <AdminSidebar />
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
                <input onChange={e => handleFileUpload(e)}
                  type="file"
                  id="userProfile"
                  hidden />
                {
                  existingPicture == "" ?
                    <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} className='flex items-center justify-center mx-25' src={preview ? preview : "https://static.vecteezy.com/system/resources/thumbnails/050/758/789/small_2x/user-icon-on-transparent-background-free-png.png"} alt="user" />
                    :
                    existingPicture.startsWith("https://lh3.googleusercontent.com/") ?
                      <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src={preview ? preview : existingPicture} alt="user" />
                      :
                      <img style={{ height: '100px', width: '100px', borderRadius: '50%' }} src={preview ? preview : `${AxiosInstance.defaults.baseURL}/uploads/${existingPicture}`} alt="no image" />


                }
              </label>

              {!imageFile && <div className='mt-5 text-yellow-500 text-sm'>*Only accspts image file</div>}

              {/* username */}
              <div className="mt-10 mb-3 w-full px-5">
                <input value={userDetails.username} onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" placeholder='Username' className='w-full border border-gray-200 rounded p-2' />
              </div>

              {/* newpassword */}
              <div className="mt-3 mb-3 w-full px-5">
                <input value={userDetails.password} onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="text" placeholder='New Password' className='w-full border border-gray-200 rounded p-2' />
              </div>

              {/* confirm password */}
              <div className="mt-3 mb-3 w-full px-5">
                <input value={userDetails.cPassword} onChange={e => checkPassword(e.target.value)} type="text" placeholder='Confirm Password' className='w-full border border-gray-200 rounded p-2' />
              </div>
              {!passwordMatch && <div className='mt-5 text-yellow-500 text-sm'>*Password is not matching..try again </div>}





              {/* reset and update buttons */}
              <div className="flex justify-end w-full px-5 mt-5">
                <button onClick={resetProfile} className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
                <button onClick={handleUpdateUser} className='bg-green-500 text-white p-3 rounded me-2'>Update</button>

              </div>

            </div>


          </div>
        </div>

      </div>
                  <ToastContainer position='top-center' theme='colored' autoClose={3000} />

    </div>
  )
}

export default AdminSettings