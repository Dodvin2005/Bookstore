import React from "react";
import Header from "../Components/Header";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <div style={{height:"600px"}} className="flex flex-col justify-center items-center bg-[url(/landing.png)] bg-cover bg-center text-white py-10">
      <div style={{height:"600px",background:"rgba(0,0,0,0.4)"}} className="w-full flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold">Wonderful Books</h1>
        <p>Gift your Family and Friends a Book</p>
      <div>
      <input type="text placeholder='Search A Book" className="bg-white p-2 rounded-3xl w-100 text-black" />
      <FaSearch className="text-gray-500 cursor pointer" style={{marginTop:'-40px',marginLeft:'360px'}}/>
      </div>
      </div>
      </div>

{/* new arrivals */}
<section className="md:px-40 my-5 p-5 flex flex-col justify-center items-center">
  <h1 className="text-3xl font-bold">NEW ARRIVALS</h1>
  <h1 className="text-3xl my-2 ">Explore our latest collection</h1>
  <div className="md:grid grid-cols-4 md:my-0">
    {/* duplicate cards */}
    <div className="shadow rounded p-3 m-4 md:my-0">
      <img width={'100%'} height={'300px'} src="https://tse2.mm.bing.net/th/id/OIP.h-pQ2ym5qcjIRlbsC-V5QQHaG-?r=0&pid=Api&P=0&h=180" alt="" />
      <div className="flex flex-col justify-center items-center mt-4">
        <h2 className="text-blue-600 font-bold text-xl">Author</h2>
        <h3 className="text-lg">Title</h3>
        <p className="font-bold text-red-500">Price</p>
      </div>
    </div>
  </div>
  {/* button */}
  <div className="text-center my-10">
    <div><Link to={'/books'} className="bg-black p-3 text-white font-black">Explore Now...</Link></div>
  </div>
</section>



{/* featured autors */}
<section className="md:grid grid-cols-2 items-center gap-10 md:px-40">
  <div className="text-center">
    <h2 className="text-2xl font-bold">FEATURED AUTHORS</h2>
    <h3 className="text-xl">Captiates with every word</h3>

    <p className="my-5 text-justify">Welcome to the Author Spotlight section of our bookstore website! This feature is designed to celebrate writers, showcase their creative journeys, and help readers discover the minds behind their favorite books.</p>

    <p className="my-5 text-justify font-bold">Our Author Features include:</p>

    <p className="my-5 text-justify"><p className="my-5 text-justify font-bold" >✨ Author Profiles :</p> Get to know each author through detailed profiles that highlight their biography, writing style, achievements, and personal inspirations.</p>

        <p className="my-5 text-justify"><p className="my-5 text-justify font-bold" >📖 Published Works :</p> Explore a curated list of books written by the author with quick access to book details, reviews, and purchase options.</p>

            <p className="my-5 text-justify"><p className="my-5 text-justify font-bold" >🎤 Interviews & Insights :</p> Exclusive interviews, behind-the-scenes stories, and writing tips that offer a deeper look into the author’s creative world</p>



  </div>
  <div className="p-5 flex items-center justify-center">
    <img src="https://d3orc89ggvcevl.cloudfront.net/wp-content/uploads/2026/03/18063332/this-fierce-people-image.png" alt="Author" />
  </div>


</section>



{/* testimonials */}
<section className="md:px-40 my-5 p-5 flex flex-col justify-center items-center">
<h1 className="text-3xl font-bold">TESTIMONIALS</h1>
<h1 className="text-xl font-light">See what others are saying</h1>
<div className="my-5 flex flex-col justify-center items-center">
  <img width={'200px'} height={'200px'} style={{borderRadius:"50%"}} src="https://m.media-amazon.com/images/S/amzn-author-media-prod/ro94mfp14i3mv5febvl64tfel0.jpg" alt="User" />
  <h3 className="my-3">L J Ross</h3>
  <p className="text-justify">This bookstore has completely changed the way I discover new books. The recommendations are always spot-on, and the delivery is super fast. I love the clean interface and the huge collection! The user experience is amazing! Easy navigation, great deals, and beautifully organized categories. I appreciate how quickly customer support responds too.</p>
</div>
</section>


    </>
  );
}

export default Home;