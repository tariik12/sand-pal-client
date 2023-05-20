import login from '../../public/login.json'
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { AuthContext } from '../provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet-async';

const Register = () => {
  const { createUser, updateProfileUser } = useContext(AuthContext);
  const [accept, setAccept] = useState(false);

  const handleAccept = event => {
    setAccept(event.target.checked);
  };

  

  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || '/';

  const handleRegister = event => {
    event.preventDefault();
    const { name, photo, email, password } = event.target.elements;
    console.log( name, photo, email, password )
    const passwordRequirements = [
      { pattern: /(?=.*?[A-Z])/, message: 'At least one upper case English letter!' },
      { pattern: /(?=.*?[a-z])/, message: 'At least one lower case English letter!' },
      { pattern: /(?=.*?[0-9])/, message: 'At least one digit!' },
      { pattern: /(?=.*?[#?!@$%^&*-])/, message: 'At least one special character!' },
      { pattern: /.{8,}/, message: 'Minimum eight in length!' },
    ];

    const isPasswordValid = passwordRequirements.every(({ pattern, message }) => {
      const isValid = pattern.test(password.value);
      if (!isValid) {
        toast.error(message, {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }
      return isValid;
    });

    if (!isPasswordValid) {
      return;
    }

    createUser(email.value, password.value)
      .then(userCredential => {
        const user = userCredential.user;
        console.log(user)
        updateProfileUser(name.value, photo.value);
        toast('Register Success!', {
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
      .catch(error => {
        const errorMessage = error.message;
        toast.error(`${errorMessage}`, {
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
        <div className="hero min-h-screen md:h-full bg-base-200">
           <Helmet>
                <title>Sand Pal !!  Register</title>
            </Helmet>
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <Lottie animationData={login} loop={true} />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl md:h-[650px]   p-5 bg-base-100">
          <h1 className="text-center text-2xl font-bold p-5">Welcome! Please Register to continue.</h1>
          <form onSubmit={handleRegister}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Please enter your name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photo' placeholder="Please enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="Please enter your email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-bold">Password</span>
                                </label>

                                <input type="password" name="password" placeholder="Please enter your password" className="input input-bordered" />
                                <label className="label">
                                    
                                {<span className='font-bold '>Accept <Link to="/terms" className=' text-cyan-700 hover:text-cyan-400 font-bold'>terms and conditions</Link></span>}
                                    <div className="form-control">
                                        <label className="cursor-pointer label">
                                        
                                            <input
                                            className="checkbox checkbox-primary"
                                        type="checkbox"
                                        onClick={handleAccept}
                                    />
                                        </label>
                                    </div>
                                    
                                </label>
                                <span className='font-bold mt-5'> Already have an account ? <Link to='/login' className=' text-cyan-700 hover:text-cyan-400 font-bold'>Login</Link></span>
                                
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="w-100 btn btn-outline btn-primary " type="submit" disabled={!accept} >Login</button>
                            </div>
                        </form>
          </div>
        </div>
      </div>
    );
};

export default Register;