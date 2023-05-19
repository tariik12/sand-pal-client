import { useEffect, useState } from "react";
import AllToysCard from "./AllToysCard/AllToysCard";


const AllToys = () => {
    const [allToys, setAllToys] = useState([])
    useEffect(() => {

        fetch('http://localhost:5000/allToys')
            .then(res => res.json())
            .then(data => setAllToys(data))
    }, [])
    return (
        <div className="p-10 overflow-x-auto w-full">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>Seller Name</th>
                        <th>Toy Name</th>
                        <th>Toy Picture</th>
                        <th>Price</th>
                        <th> sab Category</th>
                        <th>Photo</th>
                        <th> Raging</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        allToys?.slice(0,20).map((toy, index) => <AllToysCard
                            key={index}
                            toy={toy}
                        ></AllToysCard>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllToys;