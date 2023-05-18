import login from '../../../public/login.json'
import Lottie from "lottie-react";
import { FaGoogle } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
      const [data, setData] = useState("");

      console.log(data)
    return (
        <div className="hero min-h-screen md:h-72 bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <Lottie animationData={login} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl md:h-[500px] bg-base-100">
            <div className="card-body">
                <h1 className='text-center text-4xl font-bold'>Login Here !!</h1>
                <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Email</span>
                </label>
               
                <input {...register("email")} type="email" placeholder="Enter Your Email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold">Password</span>
                </label>
                <input {...register("password")} type="password" placeholder="Enter Your Password" className="input input-bordered" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  <span> Create new account ? <Link to='/register' className=' text-cyan-700 hover:text-cyan-400 font-bold'>Register</Link></span>
                </label>
                <label className="label">
                
                </label>

              </div>
              <div className="form-control ">
                <button className="btn   bg-cyan-700 hover:bg-cyan-400 text-white font-bold">Login</button>
              </div>
              </form>
              <div className="divider">OR</div>
              <div>
                <FaGoogle className='ms-32  h-10 w-10 text-cyan-700 hover:text-cyan-400 ' />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;