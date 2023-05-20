import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard/AllToysCard";
import { Helmet } from "react-helmet-async";


const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState('')
    useEffect(() => {

        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])

    const handleSearch =() =>{
        fetch(`http://localhost:5000/allToySearch/${searchText}`)
        .then(res =>res.json())
        .then(data =>setAllToys(data))
    }
    return (
        <div className="p-10 overflow-x-auto w-full">
            <Helmet>
                <title>Sand Pal !!  AllToys</title>
            </Helmet>
            <div className="card flex gap-4 bg-base-100 shadow-2xl">
                <div>
                    <h1 className="text-4xl font-extrabold mx-auto">All Toys </h1>
                </div>
                <div className="form-control w-80">
                    <div className="relative">
                        <input onChange={(event)=>setSearchText(event.target.value)} type="text" placeholder="Search" className="input input-bordered w-full pr-16" />
                        <button onClick={handleSearch} className="btn btn-primary absolute top-0 right-0 rounded-l-none">Click</button>
                    </div>
                </div>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Toy Picture</th>
                        <th>Price</th>
                        <th>sab Category</th>
                        <th>Available Quantity</th>
                        <th>Details</th>
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