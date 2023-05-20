import { Link, useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'
import { useContext } from "react";
import { AuthContext } from "../../../../../provider/AuthProvider";
import { FaGratipay, FaArrowLeft } from "react-icons/fa";

const Sub_CategoryDetails = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext)
    console.log(data)
    const {like,material,name,picture,price,rating,sand,details} = data
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-10 m-10 border">
  <img src={picture} className="w-[700px] h-[800px] border" alt="Album"/>
  <div className="card-body">
    <div className="flex ">
    <h1 className="card-title text-3xl md:text-6xl font-extrabold text-center ms-10 md:ms-80" >{sand}</h1>
    <div className="avatar online ms-40">
  <div className="md:w-24 w-16 rounded-full">
    <img src={user?.photoURL} />
  </div>
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
    <Link to='/' className="btn  md:w-1/2 btn-info btn-md btn-outline"><FaArrowLeft className=" md:w-8 md:h-8"/></Link>
  </div>
  
</div>
    </div>
  </div>
</div>
    );
};

export default Sub_CategoryDetails;