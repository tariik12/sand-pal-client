import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegEdit, FaSignInAlt, FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";

const MyToys = () => {
    const { user, } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])


    console.log(myToys)
    useEffect(() => {

        fetch(`http://localhost:5000/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleDelete = (_id) => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/myToy/${_id}`,{
                    method:'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Toy  has been deleted.',
                                'success'
                            )

                        }
                    })

            }
        })
    }
    return (
        <div className="p-10 overflow-x-auto w-full">
            {/* <div className="card flex gap-4 bg-base-100 shadow-2xl">
            <div>
                <h1 className="text-4xl font-extrabold mx-auto">All Toys </h1>
            </div>
            <div className="form-control w-80">
                <div className="relative">
                    <input onChange={(event)=>setSearchText(event.target.value)} type="text" placeholder="Search" className="input input-bordered w-full pr-16" />
                    <button onClick={handleSearch} className="btn btn-primary absolute top-0 right-0 rounded-l-none">Click</button>
                </div>
            </div>
        </div> */}
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
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
                        myToys?.map((toy, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <th>
                                    {toy.sellerName}
                                </th>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div>
                                            <div className="font-bold">{toy.toyName}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded ">
                                            <img src={toy.photoURL} />
                                        </div>
                                    </div>
                                </td>
                                <td>{toy.price}</td>
                                <th>

                                    
                                    <label htmlFor="my-modal-5"><Link to={`/updateToy/${toy._id}`} className="btn  btn-info btn-md btn-outline"><FaRegEdit className="w-8 h-8" /></Link></label>
                                    <button onClick={() => handleDelete(toy._id)} className="btn mx-4  btn-warning btn-md btn-outline"><FaTrashAlt className="w-8 h-8" /></button>
                                    <button className="btn  btn-primary btn-md btn-outline"><FaSignInAlt className="w-8 h-8" /></button>
                                </th>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;