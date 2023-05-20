import { Link, useRouteError } from 'react-router-dom';
import error_1 from '../../../public/error_1.json'

import Lottie from "lottie-react";
import { Helmet } from 'react-helmet-async';

const Error = () => {
  const { error, status } = useRouteError()
  return (
    <div className="card  md:w-1/2 mx-auto mt-20  bg-base-100 shadow-2xl">
      <Helmet>
        <title>Sand Pal !! Error</title>
      </Helmet>
      <div className='w-1/2  mx-auto  '><Lottie animationData={error_1} loop={true} /></div>
      <div className="card-body mt-20">
        <h2 className=" text-center text-4xl font-extrabold text-red-700"><strong>Error :</strong> {error.message}</h2>
        <p className='text-center text-2xl font-bold text-warning'>{status || 'Not Found Page' + '404'}</p>
        <Link to='/' className="btn bg-cyan-400 text-white justify-center">Go To Home</Link>

      </div>
    </div>
  );
};

export default Error;