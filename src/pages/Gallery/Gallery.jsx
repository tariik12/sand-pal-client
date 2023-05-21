
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react';


const Gallery = () => {

  const [allData, setAllData] = useState([])

  console.log(allData)



  useEffect(() => {
    fetch('https://spk-server-side.vercel.app/sandPalToy')
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [])


  const sandMolds = allData.filter(data => data.sand === 'Sand Molds')
  const SandShapers = allData.filter(data => data.sand === 'Sand Shaper')
  const SandTools = allData.filter(data => data.sand === 'Sand Tool')
  const SandBuckets = allData.filter(data => data.sand === 'Sand Bucket')
  const SandSculptingKits = allData.filter(data => data.sand === 'Sand Sculpting Kit')

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <div className='mb-20 px-20'>
      <h1 className='text-center text-6xl font-extrabold text-cyan-400 shadow-2xl p-5 rounded-md' >Sand Pal Gallery</h1>

      <div className='flex ' >
        {/* 1row */}
        <div className='w-1/2'>
          <div className=' h-[600px] p-10'  data-aos="zoom-in">
            <div data-aos="fade-left" className=' h-[200px] grid grid-cols-2 gap-2'>
              {
                sandMolds?.map((sandMold, index) => (
                  <div key={index} className="card w-full h-[250px]   bg-base-100 shadow-xl ">
                    <img src={sandMold.picture} className="w-full h-full  rounded-lg   " />
                  </div>
                ))
              }
            </div>
          </div>
          {/* 3row */}
          <div className=' h-[300px] mt-52 p-10'  data-aos="flip-right">
            <div data-aos="fade-down" className='h-[200px] grid grid-cols-3 gap-2'>
              {
                SandTools?.map((sandMold, index) => (
                  <div key={index} className="card   h-[140px] bg-base-100 shadow-xl">
                    <img src={sandMold.picture} className="w-full  h-full rounded-lg   " />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          {/* 2row */}
          <div className=' h-[300px] p-10' data-aos="flip-right">
            <div data-aos="fade-right" className='h-[200px] grid grid-cols-3  gap-2'>
                {
                  SandShapers?.map((sandMold, index) => (
                    <div key={index} className="card  h-[140px] bg-base-100 shadow-xl">

                      <img src={sandMold.picture} className="  rounded-lg w-full h-full " />
                    </div>
                  ))
                }
            </div>
          </div>
          {/* 4row */}
          <div className=' h-[600px] p-10'  data-aos="zoom-in">
            <div data-aos="fade-down" className='h-[200px] grid grid-cols-2  gap-2'>
              {
                SandBuckets?.map((sandMold, index) => (
                  <div key={index} className="card w-full h-[250px]   bg-base-100 shadow-xll">
                    <img src={sandMold.picture} className=" w-full h-full  rounded-lg " />
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* 5row */}
      
        <div className='  p-10' data-aos="zoom-out-right">
          <div  className='h-[200px] grid grid-cols-6 '>
            {
              SandSculptingKits?.map((sandMold, index) => (
                <div key={index} className="card  p-2  bg-base-100 shadow-xl" >
                  <img src={sandMold.picture} className="w-full h-full  rounded-lg  mx-auto " />
                </div>
              ))
            }
          </div>
          </div>
      </div>
    
  );
};

export default Gallery;
