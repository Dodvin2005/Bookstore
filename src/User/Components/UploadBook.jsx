import React, { useEffect, useState } from 'react'
import { FaPlus } from 'react-icons/fa'
import { ToastContainer,toast} from 'react-toastify';
import { addBookAPI, getBookDetailsAIAPI } from '../../Services/AllApi';
import useDebounce from '../../Hooks/UseDebounce';



function UploadBook() {
    const [bookDetails, setBookDetails] = useState({
        title: "", author: "", imageURL: "", pages: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImages: []
    })

    const [preview,setPreview] = useState("")
    const [previewList,setPreviewList] = useState([])
    console.log(bookDetails);
    const debounceTitleSearch = useDebounce(bookDetails,2000)

    useEffect(()=>{
        if(debounceTitleSearch){
            console.log("GEMINI API CALL");
            generateBookAbstractAI()
            
        }
    },[debounceTitleSearch])

  const generateBookAbstractAI = async (debounceTitleSearch)=>{
    console.log(debounceTitleSearch);

    const result = await getBookDetailsAIAPI(debounceTitleSearch)
    console.log(result);
    setBookDetails({...bookDetails,abstract:result.data.content})
    
    
  }



    const handleUploadImages = (e)=>{
        const imageFile = e.target.files[0]
        const uploadImageArray = bookDetails.uploadImages
        uploadImageArray.push(imageFile)
        setBookDetails({...bookDetails,uploadImages:uploadImageArray})
        const url = URL.createObjectURL(imageFile)
            setPreview(url)
            const demoPreviewList = previewList
            demoPreviewList.push(url)
            setPreviewList(demoPreviewList)
        
    }

    const handleReset = ()=>{
        setBookDetails({ title: "", author: "", imageURL: "", pages: "", price: "", discountPrice: "", abstract: "", publisher: "", isbn: "", language: "", category: "", uploadImages: []})
        setPreviewList([]),
        setPreview("")

    }

  const handleAddBook = async () => {
    const { title, author, imageURL, pages, price, discountPrice, abstract, publisher, isbn, language, category, uploadImages } = bookDetails

    if (!title || !author || !imageURL || !pages || !price || !discountPrice || !abstract || !publisher || !isbn || !language || !category || uploadImages.length == 0) {
        toast.info("Please fill the form completely")
    } else {
        // API call
        const reqBody = new FormData()

        for (let key in bookDetails) {
            if (key != "uploadImages") {
                reqBody.append(key, bookDetails[key])
            } else {
                bookDetails.uploadImages.forEach(imageFile => {
                    reqBody.append("uploadImages", imageFile)
                })
            }
        }

        // Call add book API
        const result = await addBookAPI(reqBody)

        if (result.status == 200 || result.status == 201) {
            toast.success("Book added successfully")
            handleReset()
        } else {
            toast.error("Failed to add book")
        }
    }
}





    return (
        <div className='p-10 my-20 mx-5 bg-blue-100 rounded-2xl'>
            <h1 className="text-center text-3xl font-medium">Upload Book Details</h1>
            <div className="md:grid grid-cols-2 mt-10 w-full">
                <div className="px-3">
                    <div className="mb-3">
                        <input value={bookDetails.title} onChange={e=>setBookDetails({...bookDetails,title:e.target.value})} type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.author} onChange={e=>setBookDetails({...bookDetails,author:e.target.value})} type="text" placeholder='Author' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.imageURL} onChange={e=>setBookDetails({...bookDetails,imageURL:e.target.value})} type="text" placeholder='Book Cover Image URL' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.pages} onChange={e=>setBookDetails({...bookDetails,pages:e.target.value})} type="text" placeholder='Pages' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.price} onChange={e=>setBookDetails({...bookDetails,price:e.target.value})} type="text" placeholder='Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.discountPrice} onChange={e=>setBookDetails({...bookDetails,discountPrice:e.target.value})} type="text" placeholder='Discount Price' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.abstract} onChange={e=>setBookDetails({...bookDetails,abstract:e.target.value})} type="text" placeholder='Abstract' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.publisher} onChange={e=>setBookDetails({...bookDetails,publisher:e.target.value})} type="text" placeholder='publisher' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.isbn} onChange={e=>setBookDetails({...bookDetails,isbn:e.target.value})} type="text" placeholder='isbn' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.language} onChange={e=>setBookDetails({...bookDetails,language:e.target.value})} type="text" placeholder='language' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input value={bookDetails.category} onChange={e=>setBookDetails({...bookDetails,category:e.target.value})} type="text" placeholder='Category' className='w-full p-2 rounded bg-white' />
                    </div>
                </div>


                <div className="px-3">

                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    <div className="mb-3">
                        <input type="text" placeholder='Book Title' className='w-full p-2 rounded bg-white' />
                    </div>
                    {/* upload book */}
                    <div className='mb-3 flex justify-center items-center mt-10'>
                        <label htmlFor="bookImage">
                           {
                            previewList.length<3 ?
                            <>
                             <input onChange={e=>handleUploadImages(e)} type="file" id='bookImage' />
                            <img style={{ height: '200px', width: '250px' }} className='flex items-center justify-center mx-25 rounded-2xl' src= {preview ? preview :"https://images.pexels.com/photos/5821/hands-hand-book-reading.jpg?cs=srgb&dl=pexels-kaboompics-com-5821.jpg&fm=jpg" }alt="" />
                            </>
                            :
                             <img style={{ height: '200px', width: '250px' }} className='flex items-center justify-center mx-25 rounded-2xl' src= {preview ? preview :"https://images.pexels.com/photos/5821/hands-hand-book-reading.jpg?cs=srgb&dl=pexels-kaboompics-com-5821.jpg&fm=jpg" }alt="" />
                           }
                        </label>
                    </div>
                    {/* preview of upload books */}
                    {
                        preview &&
                        <div className="flex justify-center items-center">
                       {
                        previewList?.map((imageURL,index)=>(
                             <img key={`${imageURL}-${index}`} width={'70px'} height={'70px'} src={imageURL} alt="" />
                        ))
                       }
                       {
                        previewList.length<3 &&
                         <label htmlFor="bookUpload">
                            <input onChange={e=>handleUploadImages(e)} type="file" id='bookUpload' hidden />
                            <FaPlus className='text-3xl ms-2' />
                        </label>
                       }
                    </div>
                    }
                </div>

            </div>
            <div className="flex md:justify-end justify-center w-full px-5 mt-5">
                <button onClick={handleReset} className='bg-yellow-500 text-white p-3 rounded me-2'>Reset</button>
                <button onClick={handleAddBook} className='bg-green-500 text-white p-3 rounded me-2'>Add Book</button>

            </div>
             <ToastContainer position='top-center' theme='colored' autoClose={3000} />
        </div>
    )
}

export default UploadBook