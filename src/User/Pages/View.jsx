import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { FaCamera, FaEye, FaFastBackward } from 'react-icons/fa'
import { Link, useParams } from 'react-router-dom'
import { buyBookAPI, viewBookAPI } from '../../Services/AllApi'
import AxiosInstance from '../../Api/AxiosInstance'
import {loadStripe} from '@stripe/stripe-js';


function View() {
  const [modal,setModal] = useState(false)
    const {id} = useParams()
    const [bookDetails,setBookDetails] = useState({})
    console.log(bookDetails);
    

    useEffect(()=>{
      getBookDetails()
    })


    const getBookDetails = async () => {
      const result = await viewBookAPI(id)
      setBookDetails(result.data)
    }

    const makePayment = async ()=>{
      console.log(import.meta.env.VITE_STRIPE_PK);
      
      // load stripe
      const stripe = await loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
      console.log(stripe);
      // api call
      const result = await buyBookAPI(id)

    }

  return (
    <>
    <Header/>
    <div className="md:m-10 m-5">
      <div className="border p-5 shadow border-gray-400">
        <div className="md:grid grid-cols-4 gap-x-10">
          {/* image */}
          <div className="col-span-1">
            <img className='w-full' src="https://tse2.mm.bing.net/th/id/OIP.h-pQ2ym5qcjIRlbsC-V5QQHaG-?r=0&pid=Api&P=0&h=180" alt="image" />
          </div>
          {/* book details */}
          <div className="col-span-3">
            <div className="flex justify-between mt-5 md:mt-0">
              <h2 className='text-2xl font-bold'>{bookDetails?.title}</h2>
              <button onClick={()=>setModal(true)} className="text-gray-400"><FaEye/></button>
            </div>
            <h2 className="text-blue-800 font-bold text-xl my-5">{bookDetails?.author}</h2>
            <div className="md:grid grid-cols-3 gap-5 my-10">
              <p className="font-bold">Publisher :{bookDetails?.publisher}</p>
              <p className="font-bold">Language :{bookDetails?.language}</p>
              <p className="font-bold">No of pages :{bookDetails?.impagesageURL}</p>
              <p className="font-bold">Category :{bookDetails?.category}</p>
              <p className="font-bold">ISBN :{bookDetails?.isbn}</p>
              <p className="font-bold">Seller :{bookDetails?.seller}</p>

            </div>
          </div>
          <h4 className="font-bold text-lg">{bookDetails?.abstract}</h4>
        </div>
        <div className="flex justify-end">
          <Link to={'/books'} className='bg-blue-900 text-white p-2 font-black flex-items-center'><FaFastBackward className='me-2' />Back</Link>
        <button className='bg-green-400 text-white font-black ms-5 p-2'>{bookDetails?.price}</button>
        </div>

      </div>
      {/* modal */}
      {
        modal &&
        <div className="relative z-10 overflow-y-auto " onClick={()=>setModal(false)}>
          <div className="bg-gray-500/75 fixed inset-0 ">
          <div className="flex justify-center items-center min-h-screen">
            <div className="bg-white md:w-250 w-100">
              {/* modal title */}
              <div className="bg-black text-white p-3 rounded-2xl">
                <h3>Book Images</h3>
              </div>
              {/* modal body */}
              <div className="relative p-5">
                <p className="text-blue-600 flex items-center"><FaCamera className='me-2' />Camera clicks of Book</p>
                <div className="md:flex flex-wrap my-4">
                  {/* duplicate image */}
                 {
                  bookDetails?.uploadedImages?.length>0 ?
                  bookDetails?.uploadedImages?.map(filename=>{
                     <img className='md:w-100 w-50 md:me-2 md:mt-0 mb-3' src={`${AxiosInstance.defaults.baseURL}/uploads/${filename}`} alt="books" />
                  })
                  :
                  <div className='my-5 font-semibold'>Images Not Available!!!</div>
                 }
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
}
    </div>
    </>
  )
}

export default View