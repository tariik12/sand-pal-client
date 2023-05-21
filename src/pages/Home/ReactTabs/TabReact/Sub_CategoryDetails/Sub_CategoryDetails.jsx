import {  Link, useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '@smastrom/react-rating/style.css'
import { FaGratipay, FaArrowLeft } from "react-icons/fa";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";

const Sub_CategoryDetails = () => {
    const data = useLoaderData();
  
    console.log(data)
    const {like,material,name,picture,price,rating,sand,details} = data
    useEffect(()=>{
      Aos.init({duration:3000})
    },[])
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-10  border" data-aos="zoom-in-up">
          <Helmet>
          <title>Sand Pal !! SubToyDetails</title>
          </Helmet>
  <img src={picture} className="w-[700px] h-[800px] border" alt="Album"/>
  <div className="card-body">
    <div className="flex ">
    <h1 className=" text-3xl md:text-6xl font-extrabold text-center ms-10 " >{sand}</h1>
    <div className="avatar online ms-40">
  </div>
    </div>
    <h2 className=" text-2xl md:text-4xl font-extrabold p-10">{name}</h2>
    <p className="text-xl ps-10"><strong>Material:</strong> {material} <br /> <br />
    <span className="text-xl "><strong>Price:</strong> ${price}</span> <br /><br />
    <span className="text-xl ">
        <strong>Details:</strong> {details}
    </span>
    </p>
    <div className="card-actions justify-end">
    <div className="stats w-full">
  
  <div className="stat">
  <div className="stat-figure text-primary">
    <FaGratipay className="w-8 h-8" />
      
    </div>
    <div className="stat-title">Total Likes</div>
    <div className="md:stat-value text-primary">{like}K</div>
    
  </div>
  
  <div className="stat">
    <div className="stat-figure text-secondary">
    <Rating style={{ maxWidth: 250 }} value={rating} readOnly />
      
    </div>
    <div className="stat-title">Page Views</div>
    <div className="md:stat-value text-secondary">{rating}M</div>
    
  </div>
  
  <div className="stat  mt-5">
   <Link to='/' className="btn"><FaArrowLeft className="md:w-8 md:h-8"/></Link>
  </div>
  
</div>
    </div>
  </div>
</div>
    );
};

export default Sub_CategoryDetails;