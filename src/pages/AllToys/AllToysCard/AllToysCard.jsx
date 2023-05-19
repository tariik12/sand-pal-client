

const AllToysCard = ({toy}) => {
    console.log(toy)
    const {Seller_name, toy_name,photoURL,rating,price,sab_category} =toy ||{}
    return (
        <tr >
        <th>
          {Seller_name}
        </th>
        <td>
          <div className="flex items-center space-x-3">
          <div>
              <div className="font-bold">{toy_name?.value}</div>
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
          <button className="btn  btn-info btn-md btn-outline">Update</button>
          <button className="btn mx-4  btn-warning btn-md btn-outline">Delete</button>
          <button className="btn  btn-primary btn-md btn-outline">View details</button>
        </th>
      </tr>
    );
};

export default AllToysCard;