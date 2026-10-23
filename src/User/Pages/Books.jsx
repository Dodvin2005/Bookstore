import React, { useContext, useEffect, useState } from 'react'
import Header from '../Components/Header'
import { FaBarsStaggered } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { getAllBooksAPI } from '../../Services/AllApi'
import { searchContext } from '../../contextAPI/ShareContext'

function Books() {
    const { searchKey, setSearchKey } = useContext(searchContext)
  
  const [toggle, setToggle] = useState(false)
  const [token, setToken] = useState("")

  const [allBooks, setAllBooks] = useState([])
    const [categoryList, setCategoryList] = useState([])
  const [dummyAllBooks,setDummyAllBooks] = useState([])
  console.log(categoryList);


  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      const userToken = sessionStorage.getItem("token")
      setToken(userToken)
      getBooks()
    }
  }, [searchKey])

  const getBooks = async () => {
    const result = await getAllBooksAPI(searchKey)
    if (result.status == 200) {
      setAllBooks(result.data)
      setDummyAllBooks(result.data)
      const temCategory = result.data.map(item=>item.category)
      setCategoryList([...new Set(temCategory)])
    }
  }

 const filterBooks = (category) => {
    if (category != 'all') {
        setAllBooks(dummyAllBooks?.filter(book => book.category == category))
    } else {
        getBooks()
    }
}

  const handleSearch = ()=>{
    if(!searchKey){
      toast.warning("Please Input a Book title")
    }else if(!sessionStorage.getItem("token")){
      toast.warning("please login to explore more...!!")
      setTimeout(()=>{
        Navigate('/login')
      },2000)
    }
  }
  return (
    <>
      <Header />
      {
        token ?
          <>
            <div className='flex flex-col items-center justify-center my-5'>
              <h1 className='my-5 font-bold text-3xl'>ALL BOOKS</h1>

              <div className='flex my-5'>
                <input value={searchKey} onClick={handleSearch} className='p-2  border-gray-300 w-100 rounded' type="text" placeholder='search by book title' />
                <button className='p-3 bg-blue-500 text-white ms-1 rounded'>Search</button>
              </div>
            </div>
            {/* grid filter & book card */}
            <div className="md:gird grid-cols-4 p-4 md:px-40 mb-10">
              {/* filter */}
              <div className="col-span-1">
                <div className="flex justify-between">
                  <h1 className="text2xl font-bold">Filter</h1>
                  <button onClick={() => setToggle(!toggle)} className="font-bold text-2xl md:hidden"><FaBarsStaggered /></button>
                </div>
                {/* filter category */}
                <div className={toggle ? "block" : "hidden md:block"}>
                  <div  className="mt-3">
                    <input type="radio" name='filter' id='no-filter' />
                    <label htmlFor="no-filter" className='ms-3'>All</label>
                  </div>
                 {
                  categoryList?.map(category=>{
                     <div key={category} className="mt-3">
                    <input onClick={() => filterBooks(category)} type="radio" name='filter' id='filter' />
                    <label htmlFor="filter" className='ms-3'>Book-Category</label>
                  </div>
                  })
                 }
                </div>
              </div>
              {/* book card */}
              <div className="col-span-3">
                <div className="md:grid grid-cols-4 md:my-0">
                  {/* duplicate cards */}
                  {
                    allBooks.length > 0 ?
                      allBooks.map(book => {
                        <div key={book?.id} className="shadow rounded p-3 m-4 md:my-0">
                          <img width={'100%'} height={'300px'} src={book?.imageURL} alt="" />
                          <div className="flex flex-col justify-center items-center mt-4">
                            <h2 className="text-blue-600 font-bold text-xl">{book?.author}</h2>
                            <h3 className="text-lg">{book?.title}</h3>
                            <Link to={'/books/:id'} className='font-bold bg-blue-500 p-3 text-white mt-2 rounded'>View Book</Link>
                          </div>
                        </div>
                      })
                      :
                      <div className="text-center font-bold my-5">Book Not Found...</div>
                  }
                </div>
              </div>
            </div>
          </>
          :
          <div className='my-5 min-h-screen items-center justify-center flex flex-col'>
            <img className='w-100' src="https://csp.in/static/media/404.1a4a7d60d8c0a9910236.jpg" alt="page not found" />
            <p>Ohh Noo!!!</p>
            <h2 className="text-2xl font-medium">Looks like You are Lost</h2>
            <p>the page you are looking for is not available</p>
            <Link to={'/'} className='bg-black mt-5 px-3 py-2 text-white'>Back to Home</Link>
          </div>
      }
    </>
  )
}

export default Books