import { Link } from "react-router-dom";
import logo from "../../../../assets/logo.png"
import { FaBahai} from "react-icons/fa";
import { useState } from "react";


const Navbar = () => {

  const {user} =useState(null)

    const navLinkItem =
    <>
      <li><Link to='/'>Home</Link></li>
      <li><Link className="/blog">Blogs</Link></li>
      <li><Link>All Toys</Link></li>
      {
        user? <>
                <li><Link>My Toys</Link></li>
                <li><Link>Add Toy</Link></li>
              </>
        :
        <>
        <li><Link to='/login'>Login</Link></li>
        <li><Link to='/register'>Register</Link></li>
        </>
      }
    </>
    return (
        <div className="navbar  bg-cyan-300">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {navLinkItem}
      </ul>
    </div>
    <div className="avatar relative flex justify-center items-center ms-10 p-2">
  <div className="w-24 rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2 ">
    <img src={logo}/>
    <FaBahai className="absolute top-6 left-50 text-white ms-8 w-7 h-7 p-1" />
    <p className="absolute top-12 left-50 text-white ms-4" >sand pal</p>
  </div>
</div>
    <Link className=" text-xl md:text-4xl font-bold text-white ms-5" to='/'>Sand Pal</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navLinkItem}
    </ul>
  </div>
  
</div>
    );
};

export default Navbar;