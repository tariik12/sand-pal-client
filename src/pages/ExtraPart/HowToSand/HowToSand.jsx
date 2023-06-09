import howTo from '../../../assets/howTo.avif'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const HowToSand = () => {

  
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div className="md:hero md:min-h-screen overflow-hidden" data-aos="zoom-in" style={{ backgroundImage: `url(${howTo})` }} >
  <div className="md:hero-overlay bg-opacity-60"></div>
  <div className="md:hero-content text-center text-neutral-content">
    <div className="max-w-4xl" data-aos="flip-down">
      <h1 className="mb-5 text-6xl font-bold" >How to use Sand Pal</h1>
      <p className="mb-5 text-2xl">Choose a flat surface to work on. Use sand clean of seashells and stones. Fill mold with damp sand and pack tightly. Situate and eject shape with both thumbs pushing down.</p>
      <button className="btn btn-primary btn-outline">Learn More</button>
    </div>
  </div>
</div>
    );
};

export default HowToSand;