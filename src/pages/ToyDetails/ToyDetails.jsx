import { Helmet } from "react-helmet-async";
import { FaArrowLeft, FaGratipay } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from '@smastrom/react-rating'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '@smastrom/react-rating/style.css'
import { useEffect } from "react";


const ToyDetails = () => {
    const data = useLoaderData()
    const {rating,description,photoURL,price,quantity,sellerEmail,sellerName,toyName,subToy} = data;
    
    
    useEffect(() => {
      Aos.init({ duration: 3000 })
    }, [])
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl p-10 m-10 border">
        <Helmet>
        <title>Sand Pal !! ToyDetails</title>
        </Helmet>
<img src={photoURL} className="w-[700px] h-[800px] border" alt="Album" data-aos="zoom-in"/>
<div className="card-body">
  <div className="flex justify-center items-center gap-4">
  <h1 className="card-title text-3xl md:text-6xl font-extrabold text-center ms-10 " data-aos="zoom-in">{sellerName}</h1>
  <h1 className="text-xl" data-aos="zoom-in">{sellerEmail}</h1>
  </div>
  <h2 className=" text-cyan-400 text-2xl md:text-4xl font-extrabold p-10">{toyName}</h2>
  <p className="text-xl ps-10" ><span data-aos="zoom-in" ><strong className="font-bold text-2xl">Available Quantity:</strong> {quantity}</span> <br /> <br />
  <span className="text-xl " data-aos="zoom-in"><strong className="font-bold text-2xl">Price:</strong> ${price}</span> <br /><br />
  <span data-aos="zoom-in" className="text-xl" ><strong className="font-bold text-2xl">Toy Sub Category :</strong>{subToy.map((sub,index)=><li key={index} className="ps-5">{sub.value}</li>)}</span> <br /><br />
  <span className="text-xl ">
      <strong className="font-bold text-2xl" data-aos="zoom-in">Details:</strong> {description}
  </span>
  </p>
  <div className="card-actions justify-end">
  <div className="stats w-full">

<div className="stat">
<div className="stat-figure text-primary">
  <FaGratipay data-aos="zoom-in" className="w-8 h-8" />
    
  </div>
  <div className="stat-title" data-aos="zoom-in">Total Likes</div>
  <div className="md:stat-value text-primary" data-aos="zoom-in">20K</div>
  
</div>

<div className="stat">
  <div className="stat-figure text-secondary">
  <Rating data-aos="zoom-in" style={{ maxWidth: 250 }} value={rating} readOnly />
    
  </div>
  <div className="stat-title" data-aos="zoom-in">Page Views</div>
  <div className="md:stat-value text-secondary" >{rating}M</div>
  
</div>

<div className="stat  mt-5" data-aos="zoom-in">
  <Link to='/' className="btn  md:w-1/2 btn-info btn-md btn-outline"><FaArrowLeft className=" md:w-8 md:h-8"/></Link>
</div>

</div>
  </div>
</div>
</div>
    );
};

export default ToyDetails;