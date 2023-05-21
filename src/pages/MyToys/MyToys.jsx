import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link } from "react-router-dom";
import { FaRegEdit, FaSignInAlt, FaTrashAlt } from "react-icons/fa";
import Aos from 'aos'
import 'aos/dist/aos.css'
import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.css'
import { Helmet } from "react-helmet-async";

const MyToys = () => {
    const { user, } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
   
    useEffect(() => {
        Aos.init({ duration: 1500 })
      }, [])

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
        <div className=" overflow-x-auto  w-full">
            <Helmet>
                <title>Sand Pal !!  MyToy</title>
            </Helmet>
            <div>
                    <h1 className="text-4xl py-10 bg-base-100 shadow-xl text-center font-extrabold mx-auto">My Toys </h1>
                </div>
            <div className="bg-base-100 shadow-xl p-5 ">
                <button onClick={handleAss}  className="btn m-5 btn-primary btn-outline">acnding</button>
                <button onClick={handleDes} className="btn  btn-primary btn-outline">decnding</button>
            </div>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                    <th className="text-lg" data-aos="zoom-in">NO</th>
                        <th className="text-lg" data-aos="zoom-in">SELLER NAME</th>
                        <th className="text-lg" data-aos="zoom-in">SELLER EMAIL</th>
                        <th className="text-lg" data-aos="zoom-in">TOY NAME</th>
                        <th className="text-lg" data-aos="zoom-in">TOY PICTURE</th>
                        <th className="text-lg" data-aos="zoom-in">PRICE</th>
                        <th className="text-lg" data-aos="zoom-in">RATING</th>
                        <th className="text-lg" data-aos="zoom-in">SUB CATEGORY</th>
                        <th className="text-lg" data-aos="zoom-in">AVAILABLE QUANTITY</th>
                        <th className="text-lg" data-aos="zoom-in">DETAILS</th>
                    </tr>
                </thead>
                <tbody >
                    {
                        myToys?.map((toy, index) => (
                            <tr key={index}>
                                <td data-aos="zoom-in">{index + 1}</td>
                                <th data-aos="zoom-in">
                                    {toy.sellerName}
                                </th>
                                <td data-aos="zoom-in">{toy.sellerEmail}</td>
                                <td data-aos="zoom-in">
                                    <div className="font-bold">{toy.toyName}</div>
                                </td>
                                <td data-aos="zoom-in">
                                    <div className="avatar">
                                        <div className="w-24 rounded ">
                                            <img src={toy.photoURL} />
                                        </div>
                                    </div>
                                </td>
                                <td data-aos="zoom-in">{toy.price}</td>
                                <td data-aos="zoom-in">{toy.rating}</td>
                                <td data-aos="zoom-in">{toy.subToy.map((sub,index)=><li key={index}>{sub.value}</li>)}</td>
                                <td data-aos="zoom-in">{toy.quantity}</td>
                                <th data-aos="zoom-in">
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