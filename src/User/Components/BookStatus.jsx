import React, { useEffect, useState } from 'react'
import { deleteUserBookAPI, getUserBooksAPI } from '../../Services/AllApi';

function BookStatus() {

    const [uploadBooks, setUploadBooks] = useState([])
    console.log(uploadBooks);

    useEffect(() => {
        getuploadBooks()
    }, [])

    const getuploadBooks = async () => {
        const result = await getUserBooksAPI()
        setUploadBooks(result.data)
    }

    const deleteBook = async (id) => {
        const result = await deleteUserBookAPI(id)
        getuploadBooks()
    }

    return (
        <div className="p-10 my-15 shadow rounded">
            {/* duplicate books */}
            {
                uploadBooks.length > 0 ?
                    uploadBooks.map(book => {
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
                                    <div className="flex my-3">
                                        <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/024/382/936/large_2x/approved-sign-with-checkmark-symbol-icon-label-stamp-green-round-design-transparent-background-free-png.png" alt="approved" />
                                    </div>
                                    <div className="flex my-3">
                                        <img width={'120px'} height={'120px'} src="https://static.vecteezy.com/system/resources/previews/017/178/555/original/sold-label-sign-concept-on-transparent-background-free-png.png" alt="sold" />
                                    </div>
                                </div>
                                <div className="px-4 mt-4 md:mt-0">
                                    <img src={book?.imageURL} alt="" />
                                    <div className="mt-4 flex justify-end">
                                        <button onClick={() => deleteBook(book?._id)} className="bg-red-800 text-white p-2 rounded">DELETE</button>
                                    </div>
                                </div>
                            </div>

                        </div>


                    })
                    :
                    <div className="text-center font-bold my-5">Uploaded Books Not Found...</div>
            }
        </div>
    )
}

export default BookStatus