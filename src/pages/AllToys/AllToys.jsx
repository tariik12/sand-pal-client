import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard/AllToysCard";
import { Helmet } from "react-helmet-async";
import { FaSistrix } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'



const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState('')
    const [loading, setLoading] = useState(true)
    useEffect(() => {

        fetch('https://spk-server-side.vercel.app/allToys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    const handleSearch =() =>{
        fetch(`https://spk-server-side.vercel.app/allToySearch/${searchText}`)
        .then(res =>res.json())
        .then(data =>setAllToys(data))
    }


    if(!allToys){
            setLoading(true)
    }

    if(loading){
     <progress className="progress w-56"></progress>
    }

    useEffect(() => {
        Aos.init({ duration: 1000 })
      }, [])
    return (
        <div className=" overflow-x-auto w-full" >
            <Helmet>
                <title>Sand Pal !!  AllToys</title>
            </Helmet>
            <div className=" gap-4 bg-base-100 shadow-2xl">
                <div>
                    <h1 className="text-4xl py-10  text-center font-extrabold mx-auto">All Toys </h1>
                </div>
                <div className="form-control w-1/3 p-10">
                    <div className="relative">
                        <input onChange={(event)=>setSearchText(event.target.value)} type="text" placeholder="Search Toy Name" className="input input-bordered w-full pr-16" />
                        <button onClick={handleSearch} className="btn btn-primary btn-outline absolute top-0 right-0 rounded-l-none"><FaSistrix className="w-16 h-8"/></button>
                    </div>
                </div>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th className="text-lg" data-aos="zoom-in">NO</th>
                        <th className="text-lg" data-aos="zoom-in">SELLER NAME</th>
                        <th className="text-lg" data-aos="zoom-in">TOY NAME</th>
                        <th className="text-lg" data-aos="zoom-in">TOY PICTURE</th>
                        <th className="text-lg" data-aos="zoom-in">PRICE</th>
                        <th className="text-lg" data-aos="zoom-in">SUB CATEGORY</th>
                        <th className="text-lg" data-aos="zoom-in">AVAILABLE QUANTITY</th>
                        <th className="text-lg" data-aos="zoom-in">DETAILS</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        allToys?.slice(0, 20).map((toy, index) => <AllToysCard
                            key={index}
                            toy={toy}
                            index={index}
                        ></AllToysCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;