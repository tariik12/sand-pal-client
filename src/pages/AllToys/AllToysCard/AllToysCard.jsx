import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

const AllToysCard = ({toy,index}) => {
    console.log(toy)
    const {sellerName, toyName,photoURL,price,subToy,quantity,_id,} =toy ||{}
    console.log(subToy)

    useEffect(() => {
      Aos.init({ duration: 1500 })
    }, [])
    return (
        <tr >
          <td data-aos="zoom-in">{index +1}</td>
        <th data-aos="zoom-in">
          {sellerName}
        </th>
        <td data-aos="zoom-in">
          <div className="flex items-center space-x-3" >
              <div className="font-bold">{toyName}</div>  
          </div>
        </td>
        <td data-aos="zoom-in">
        <div className="avatar" >
              <div className="w-24 rounded ">
                <img src={photoURL} />
              </div>
            </div>
        </td>
        <td data-aos="zoom-in">{price}</td>
        
        <td data-aos="zoom-in">{subToy.map((sub,index)=><li key={index}>{sub.value}</li>)}</td>
        <td data-aos="zoom-in">{quantity}</td>
        <th data-aos="zoom-in">
        <Link to={`/toyDetails/${_id}`} className="btn  btn-primary btn-md btn-outline"><FaSignInAlt className="w-8 h-8" /></Link>
        </th>
      </tr>
    );
};

export default AllToysCard;