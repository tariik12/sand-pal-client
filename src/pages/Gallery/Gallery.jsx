import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Gallery = () => {

useEffect(()=>{
    Aos.init({duration:3000})
},[])
    return (
        <div>
            <div data-aos="fade-down">
                <img className="w-1/3 h-1/3" src="https://cdn.shopify.com/s/files/1/0401/3775/2731/products/sandpalboysplay_1400x.jpg?v=1595213117" alt="" />
            </div>
            <div data-aos="fade-left">
                <img className="w-1/3 h-1/3" src="https://cdn.shopify.com/s/files/1/0401/3775/2731/products/sandpalboysplay_1400x.jpg?v=1595213117" alt="" />
            </div>
            <div data-aos="fade-right">
                <img className="w-1/3 h-1/3" src="https://cdn.shopify.com/s/files/1/0401/3775/2731/products/sandpalboysplay_1400x.jpg?v=1595213117" alt="" />
            </div>
        </div>
    );
};

export default Gallery;