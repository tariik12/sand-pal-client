
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import G_Login from '../Shared/G_Login/G_Login';
import login from '../../../public/login.json'
import Lottie from "lottie-react";
import { AuthContext } from '../../provider/AuthProvider';
import { useContext, useState } from 'react';

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [accept, setAccept] = useState(false);

    const handleAccept = (event) => {
        setAccept(event.target.checked);
    };
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';



    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user)

                toast.success('Login Success!', {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });

                navigate(from, { replace: true });
                event.target.reset();
            })
            .catch((error) => {
                const errorMessage = error.message;

                toast.error(errorMessage, {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                });
            });
    };

    return (


        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                <div className="text-center lg:text-left ">
          <Lottie animationData={login} loop={true} />
          </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-center text-2xl font-bold p-5">Welcome! Please Login to continue.</h1>
                    <div className="card-body">
                        <form onSubmit={handleLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-xl font-bold">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Please enter your email" className="input input-bordered"  required/>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text  text-xl font-bold">Password</span>
                                </label>

                                <input type="password" name="password" placeholder="Please enter your password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover font-bold">Forgot password?</a>
                                <input
                                    type="checkbox"
                                    onClick={handleAccept}
                                    label={<>Accept <Link to="/terms">terms and conditions</Link></>}
                                />
                                </label>
                                    <span className='font-bold mt-5 '>  Create account ? <Link to='/register' className=' text-cyan-700 hover:text-cyan-400 font-bold'>Register</Link></span>
                            </div>
                            <div className="form-control ">
                                <button className="btn w-100 mt-3" type="submit" disabled={!accept} >Login</button>
                            </div>
                        </form>
                    </div>

                  <div className=''>
                  <G_Login></G_Login>
                  </div>
                </div>
            </div>
        </div>

    );
};

export default Login;
