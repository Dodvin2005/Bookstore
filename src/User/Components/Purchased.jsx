import React, { useEffect, useState } from 'react'
import { getUserBroughtBooksAPI } from '../../Services/AllApi';

function Purchased() {
const [purchasedBooks,setPurchasedBooks]=useState([])
    console.log(purchasedBooks);

    useEffect(()=>{
        getPurchasedBooks()
    },[])

    const getPurchasedBooks = async()=>{
        const result = await getUserBroughtBooksAPI()
        setPurchasedBooks(result.data)
    }

  return (
    <div className="p-10 my-15 shadow rounded">
            {/* duplicate books */}
          {
            purchasedBooks.length>0 ?
            purchasedBooks.map(book=>{
                  <div className="p-5 rounded mt-4 bg-blue-100">
                <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4">
                        <h1 className='text-2xl'>{book?.title}</h1>
                        <h2 className='text-xl'>{book?.author}</h2>
                        <h3 className='text-lg text-blue-700'>₹{book?.discountPrice}</h3>
                        <p className='text-justify'>{book?.abstract}</p>
                       
                        {/* status image */}
                        <div className="flex my-3">
                            <img width={'120px'} height={'120px'} src="https://tse1.mm.bing.net/th/id/OIP.gde5yOmNTGfxc0t5UudMkgHaF1?r=0&pid=Api&h=220&P=0" alt="pending" />
                        </div>
                       
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img src={book?.imageURL}  alt="" />
                        <div className="mt-4 flex justify-end">
                        </div>
                    </div>
                </div>

            </div>
            })
            :
                             <div className="text-center font-bold my-5">purchased Books Not Found...</div>

          }
        </div>
  )
}

export default Purchased