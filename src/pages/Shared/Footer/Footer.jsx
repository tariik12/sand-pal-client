import { Link } from "react-router-dom";
import logo from "../../../assets/logo.png"
import { FaBahai,FaFacebookSquare,FaInstagramSquare,FaTelegram} from "react-icons/fa";

const Footer = () => {
    return (
        <div className="">
            <footer className="footer p-10  text-base-content bg-cyan-300">
  <div>
   <Link className=" text-6xl md:text-4xl font-bold text-white ms-28 md:ms-5 mt-10" to='/'>Sand Pal</Link> 
    
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
  <div>
    <span className="footer-title">Newsletter</span> 
    <div className="form-control w-80">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="relative">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
    </div>
  </div>
</footer> 
<footer className="footer px-10 py-4 border-t bg-cyan-300 text-base-content border-base-300">
  <div className="items-center grid-flow-col ms-28 md:ms-0">
  <div className="avatar relative flex justify-center items-center ms-10 p-2">
  <div className="w-24  rounded-full ring ring-red-500 ring-offset-base-100 ring-offset-2  ">
    <img src={logo}/>
    <FaBahai className="absolute top-6 left-50 text-white ms-8 w-7 h-7 p-1" />
    <p className="absolute top-12 left-50 text-white ms-4" >sand pal</p>
  </div>
</div>
  </div> 
    <p className="text-center mt-12">ACME Industries Ltd.Providing reliable tech since 1992</p>
  <div className="md:place-self-center md:justify-self-end ms-28 md:ms-0">
    <div className="grid grid-flow-col gap-4">
      <FaTelegram className="w-7 h-7"/>
      <FaInstagramSquare className="w-7 h-7"/>
      <FaFacebookSquare className="w-7 h-7"/>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;