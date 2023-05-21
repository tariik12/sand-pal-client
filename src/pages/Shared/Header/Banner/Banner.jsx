import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./banner.css";

// import required modules
import { EffectCreative } from "swiper";

export default function Banner() {
    useEffect(()=>{
        Aos.init({duration:3000})
    },[])
    return (
        <div data-aos="zoom-in">
            <Swiper
                grabCursor={true}
                effect={"creative"}
                creativeEffect={{
                    prev: {
                        shadow: true,
                        origin: "left center",
                        translate: ["-5%", 0, -200],
                        rotate: [0, 100, 0],
                    },
                    next: {
                        origin: "right center",
                        translate: ["5%", 0, -200],
                        rotate: [0, -100, 0],
                    },
                }}
                modules={[EffectCreative]}
                className="mySwiper6"
            >
                <SwiperSlide data-aos="fade-up"
     data-aos-easing="linear"
     data-aos-duration="1500">
                    <div className=" md:w-1/3 md:ms-auto mt-auto p-10 md:mt-0" data-aos="zoom-in-down">
                        <h4 className="text-2xl mb-3 font-bold">Discover endless creativity</h4>
                        <h1 className="text-4xl font-bold text-cyan-200">Remodel the way they build castles</h1>
                        <p className="font-bold my-3">Innovative eco-friendly builders kit</p>
                        <button className="btn btn-primary btn-outline flex justify-center">Shop Now</button>
                    </div>

                </SwiperSlide>
                <SwiperSlide data-aos="fade-right">
                <div className=" md:w-1/3 md:ms-auto mt-auto p-10 md:mt-0" >
                        <h4 className="text-2xl mb-3 font-bold">Discover endless creativity</h4>
                        <h1 className="text-4xl font-bold text-cyan-200">Remodel the way they build castles</h1>
                        <p className="font-bold my-3">Innovative eco-friendly builders kit</p>
                        <button className="btn btn-primary btn-outline flex justify-center">Shop Now</button>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                <div className=" md:w-1/3 md:ms-auto mt-auto p-10 md:mt-0" >
                        <h4 className="text-2xl mb-3 font-bold">Discover endless creativity</h4>
                        <h1 className="text-4xl font-bold text-cyan-200">Remodel the way they build castles</h1>
                        <p className="font-bold my-3">Innovative eco-friendly builders kit</p>
                        <button className="btn btn-primary btn-outline flex justify-center">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide data-aos="zoom-in-up">
                <div className=" md:w-1/3 md:ms-auto mt-auto p-10 md:mt-0" >
                        <h4 className="text-2xl mb-3 font-bold">Discover endless creativity</h4>
                        <h1 className="text-4xl font-bold text-cyan-200">Remodel the way they build castles</h1>
                        <p className="font-bold my-3">Innovative eco-friendly builders kit</p>
                        <button className="btn btn-primary btn-outline flex justify-center">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=" md:w-1/3 md:ms-auto mt-auto p-10 md:mt-0">
                        <h4 className="text-2xl mb-3 font-bold">Discover endless creativity</h4>
                        <h1 className="text-4xl font-bold text-cyan-200">Remodel the way they build castles</h1>
                        <p className="font-bold my-3">Innovative eco-friendly builders kit</p>
                        <button className="btn btn-primary btn-outline flex justify-center">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=" md:w-1/3 md:ms-auto mt-auto p-10 md:mt-0">
                        <h4 className="text-2xl mb-3 font-bold">Discover endless creativity</h4>
                        <h1 className="text-4xl font-bold text-cyan-200">Remodel the way they build castles</h1>
                        <p className="font-bold my-3">Innovative eco-friendly builders kit</p>
                        <button className="btn btn-primary btn-outline flex justify-center">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=" md:w-1/3 md:ms-auto mt-auto p-10 md:mt-0">
                        <h4 className="text-2xl mb-3 font-bold">Discover endless creativity</h4>
                        <h1 className="text-4xl font-bold text-cyan-200">Remodel the way they build castles</h1>
                        <p className="font-bold my-3">Innovative eco-friendly builders kit</p>
                        <button className="btn btn-primary btn-outline flex justify-center">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=" md:w-1/3 md:ms-auto mt-auto p-10 md:mt-0">
                        <h4 className="text-2xl mb-3 font-bold">Discover endless creativity</h4>
                        <h1 className="text-4xl font-bold text-cyan-200">Remodel the way they build castles</h1>
                        <p className="font-bold my-3">Innovative eco-friendly builders kit</p>
                        <button className="btn btn-secondary btn-outline flex justify-center">Shop Now</button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className=" md:w-1/3 md:ms-auto mt-auto p-10 md:mt-0">
                        <h4 className="text-2xl mb-3 font-bold">Discover endless creativity</h4>
                        <h1 className="text-4xl font-bold text-cyan-200">Remodel the way they build castles</h1>
                        <p className="font-bold my-3">Innovative eco-friendly builders kit</p>
                        <button className="btn btn-primary btn-outline  flex justify-center">Shop Now</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
