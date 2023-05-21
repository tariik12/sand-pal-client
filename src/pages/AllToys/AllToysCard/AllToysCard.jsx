import { FaSignInAlt } from "react-icons/fa";
import { Link } from "react-router-dom";


const AllToysCard = ({toy,index}) => {
    console.log(toy)
    const {sellerName, toyName,photoURL,price,subToy,quantity,_id,} =toy ||{}
    console.log(subToy)
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
        <td defaultValue={subToy.map(sub=>sub)}></td>
        <td>{quantity}</td>
        {subToy.map((sub,index)=><td key={index}>{sub.value}</td>)}
        <th>
        <Link to={`/toyDetails/${_id}`} className="btn  btn-primary btn-md btn-outline"><FaSignInAlt className="w-8 h-8" /></Link>
        </th>
      </tr>
    );
};

export default AllToysCard;