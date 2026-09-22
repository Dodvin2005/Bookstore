import React from 'react'

function Purchased() {
  return (
    <div className="p-10 my-15 shadow rounded">
            {/* duplicate books */}
            <div className="p-5 rounded mt-4 bg-blue-100">
                <div className="md:grid grid-cols-[3fr_1fr]">
                    <div className="px-4">
                        <h1 className='text-2xl'>Title</h1>
                        <h2 className='text-xl'>Author</h2>
                        <h3 className='text-lg text-blue-700'>$ Discount Price</h3>
                        <p className='text-justify'>Abstract</p>
                       
                        {/* status image */}
                        <div className="flex my-3">
                            <img width={'120px'} height={'120px'} src="https://tse1.mm.bing.net/th/id/OIP.gde5yOmNTGfxc0t5UudMkgHaF1?r=0&pid=Api&h=220&P=0" alt="pending" />
                        </div>
                       
                    </div>
                    <div className="px-4 mt-4 md:mt-0">
                        <img src="https://images.pexels.com/photos/5821/hands-hand-book-reading.jpg?cs=srgb&dl=pexels-kaboompics-com-5821.jpg&fm=jpg" alt="" />
                        <div className="mt-4 flex justify-end">
                        </div>
                    </div>
                </div>

            </div>
        </div>
  )
}

export default Purchased