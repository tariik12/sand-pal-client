import { FaSignInAlt } from "react-icons/fa";


const AllToysCard = ({toy,index}) => {
    console.log(toy)
    const {sellerName, toyName,photoURL,price,subToy,quantity} =toy ||{}
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
        {/* {subToy.map((sub,index)=><td key={index}>{sub}</td>)} */}
        <th>
          <button className="btn  btn-primary btn-md btn-outline"><FaSignInAlt className="w-8 h-8"/></button>
        </th>
      </tr>
    );
};

export default AllToysCard;