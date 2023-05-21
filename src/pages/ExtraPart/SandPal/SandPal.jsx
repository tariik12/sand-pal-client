import sand from '../../../assets/sand.webp'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const SandPal = () => {
    useEffect(()=>{
        Aos.init({duration:1000})
    },[])
    return (
        <div className="md:hero md:min-h-screen ">
            <div className="md:hero-content flex-col md:flex-row-reverse">
                <div className='' data-aos="fade-left">
                    <img src={sand} className="md:max-w-md p-5 md:me-end md:rounded-lg  " />
                </div>
                <div className=' max-w-2xl' data-aos="fade-right">
                    <h1 className="text-5xl font-bold text-cyan-400">Hey! We are Sand Pal!</h1>
                    <p className="py-6  text-xl">
                        We are not fortune tellers, yet, but we can guess you want your child to be the best. In like, everything.
                    </p>
                    <p className="py-6 text-xl">
                        Well, we wont take all the credits,
                        but we would love to take some.
                    </p>

                    <p className="py-6  text-xl">
                        Sand Pal is a beautiful ergonomic set of tools, designed to expand creativity to its fullest. Building with Sand Pal is about team work, engaging in natures materials and developing the meaning of fun.
                    </p>
                    <button className="btn btn-primary btn-outline">Get Your kit now</button>
                </div>
            </div>
        </div>
    );
};

export default SandPal;