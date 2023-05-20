import { FaRegEdit,FaSignInAlt,FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllToysCard = ({toy,index}) => {
    console.log(toy)
    const {sellerName, toyName,photoURL,price,_id} =toy ||{}
    return (
        <tr >
          <td>{index +1}</td>
        <th>
          {sellerName}
        </th>
        <td>
          <div className="flex items-center space-x-3">
          <div>
              <div className="font-bold">{toyName}</div>
            </div>
          </div>
        </td>
        <td>
        <div className="avatar">
              <div className="w-24 rounded ">
                <img src={photoURL} />
              </div>
            </div>
        </td>
        <td>{price}</td>
        <th>
          
          <Link to={`updateToy/${_id}`} className="btn  btn-info btn-md btn-outline"><FaRegEdit className="w-8 h-8"/></Link>
          <button className="btn mx-4  btn-warning btn-md btn-outline"><FaTrashAlt className="w-8 h-8"/></button>
          <button className="btn  btn-primary btn-md btn-outline"><FaSignInAlt className="w-8 h-8"/></button>
        </th>
      </tr>
    );
};

export default AllToysCard;