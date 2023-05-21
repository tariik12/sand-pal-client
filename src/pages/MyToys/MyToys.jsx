import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegEdit, FaSignInAlt, FaTrashAlt } from "react-icons/fa";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'
import { Helmet } from "react-helmet-async";

const MyToys = () => {
    const { user, } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])


    console.log(myToys)
    useEffect(() => {

        fetch(`https://spk-server-side.vercel.app/myToy/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [user])

    const handleDelete = (_id) => {

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
                
                fetch(`https://spk-server-side.vercel.app/myToy/${_id}`,{
                    method:'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount){
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              )
              const rem = myToys.filter( toy =>toy._id !== _id)
        console.log(rem)
        setMyToys(rem)
                    }
                })
           
            }
          })
        console.log(_id)
      
    }

    const handleAss =() =>{

        

            fetch(`https://spk-server-side.vercel.app/ass/${user?.email}`)
                .then(res => res.json())
                .then(data => setMyToys(data))
        
    }
    const handleDes =() =>{

        

            fetch(`https://spk-server-side.vercel.app/des/${user?.email}`)
                .then(res => res.json())
                .then(data => setMyToys(data))
        
    }
    return (
        <div className="p-10 overflow-x-auto w-full">
            <Helmet>
                <title>Sand Pal !!  MyToy</title>
            </Helmet>
            <div>
                <button onClick={handleAss}  className="btn">acnding</button>
                <button onClick={handleDes} className="btn">decnding</button>
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
                                   <Link to={`/updateToy/${toy._id}`} className="btn  btn-info btn-md btn-outline"><FaRegEdit className="w-8 h-8" /></Link>
                                    <button onClick={() => handleDelete(toy._id)} className="btn mx-4  btn-warning btn-md btn-outline"><FaTrashAlt className="w-8 h-8" /></button>
                                    <Link to={`/toyDetails/${toy._id}`} className="btn  btn-primary btn-md btn-outline"><FaSignInAlt className="w-8 h-8" /></Link>
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