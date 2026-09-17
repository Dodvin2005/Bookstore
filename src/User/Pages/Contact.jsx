import React from 'react'
import Header from '../Components/Header'
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { BiSolidPaperPlane } from 'react-icons/bi'

function Contact() {
  return (
    <>
    <Header/>
    <div className="md:px-20 p-5 my-5">
      <h1 className="text-center my-5 font-bold text-3xl">Contact-US</h1>
      <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ipsa voluptas aspernatur voluptate iste, consequuntur optio sequi praesentium id amet quam. Quae eos molestias, dignissimos doloribus saepe ratione! Ab, tempora. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam inventore eaque, ex omnis repudiandae soluta dolores quos a sed et in suscipit aliquam provident nemo cum voluptatum, quod vel esse. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam tempora, rem ipsa dignissimos porro, at animi quidem repellat perspiciatis corporis quas adipisci eos quaerat minima, officiis et totam? Neque, doloremque!</p>
      <div className="md:grid grid-cols-3 items-center md:px-40 p-5 mt-5 md:mt-0">
        <div className="flex items-center">
          <div style={{width:'50px',height:'50px'}} className="flex items-center justify-center bg-gray-200">
            <FaLocationArrow />
          </div>
          <p className='ms-5'>123 Main Street,123456</p>
        </div>
        <div className="flex items-center">
          <div style={{width:'50px',height:'50px'}} className="flex items-center justify-center bg-gray-200">
           <FaPhoneAlt />
          </div>
          <p className='ms-5'>1234567890</p>
        </div>
        <div className="flex items-center">
          <div style={{width:'50px',height:'50px'}} className="flex items-center justify-center bg-gray-200">
            <MdEmail />
          </div>
          <p className='ms-5'>bookstore@gmail.com</p>
        </div>

      </div>
      <div className="md:grid grid-cols-2 gap-10 my-5 p-5 md:px-40 items-center">
        <div className="bg-gray-200 p-5 text-center">
          <h1 className="font-semibold text-2xl">Send Us Message</h1>
          <form >
            <div className="mb-5 my-10">
              <input className='bg-white w-full p-2 rounded' type="text" placeholder='Name' />
            </div>
            <div className="mb-5 my-10">
              <input className='bg-white w-full p-2 rounded' type="text" placeholder='Email' />
            </div>
            <div className="mb-5 my-10">
              <input className='bg-white w-full p-2 rounded' type="text" placeholder='Password' />
            </div>
            <div className="mb-5 ">
              <button className="bg-black p-2 w-full text-white text-lg flex justify-center items-center"><BiSolidPaperPlane/> Submit</button>
            </div>
          </form>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.9751535676874!2d76.34006767460875!3d10.01890872710194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b088ffce87705cf!2sLuminar%20Technolab!5e0!3m2!1sen!2sin!4v17289542807" width='100%' height='400px' style={{border:"0"}} allowfullscreen="" loading='lazy' referrerPolicy='strict-origin-when-cross-origin'></iframe>
        </div>
      </div>
    </div>

    </>
  )
}

export default Contact