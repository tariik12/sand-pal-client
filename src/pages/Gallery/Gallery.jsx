
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
    Aos.init({ duration: 3000 })
  }, [])
  return (
    <div>

      <div className='flex'>
        {/* 1row */}
        <div className='w-1/2'>
          <div className='bg-red-800 h-96 '>
            <div data-aos="fade-left" className=' h-[200px] grid grid-cols-2'>
              {
                sandMolds?.map((sandMold, index) => (
                  <div key={index} className="card w-[50px] h-[20px]  m-10  bg-base-100 shadow-xl ">

                    <img src={sandMold.picture} className="w-full  rounded-lg  mx-auto " />


                  </div>
                ))
              }
            </div>
          </div>
          {/* 3row */}
          <div className='bg-slate-700 h-48'>
            <div data-aos="fade-down" className='h-[200px] grid grid-cols-3'>
              {
                SandTools?.map((sandMold, index) => (
                  <div key={index} className="card  w-[50px] h-[20px]  m-10  bg-base-100 shadow-xl">

                    <img src={sandMold.picture} className="w-full  rounded-lg  mx-auto " />


                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <div className='w-1/2'>
          {/* 2row */}
          <div className='bg-purple-500 h-48'>
            <div data-aos="fade-right" className='h-[200px] grid grid-cols-3 '>
              
                {
                  SandShapers?.map((sandMold, index) => (
                    <div key={index} className="card w-[50px] h-[20px] m-10 bg-base-100 shadow-xl">

                      <img src={sandMold.picture} className="  rounded-lg  mx-auto " />
                    </div>
                  ))
                }
            
            </div>
          </div>
          {/* 4row */}
          <div className='bg-rose-200 h-96'>
            <div data-aos="fade-down" className='h-[200px] grid grid-cols-2 '>
              {
                SandBuckets?.map((sandMold, index) => (
                  <div key={index} className="card w-[50px] h-[20px]  m-10 bg-base-100 shadow-xl">

                    <img src={sandMold.picture} className=" rounded-lg  mx-auto " />


                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
      {/* 5row */}
      <div>
        <div className='bg-green-400'>
          <div data-aos="fade-down" className='h-[200px] grid grid-cols-6 '>
            {
              SandSculptingKits?.map((sandMold, index) => (
                <div key={index} className="card  w-[400px]  bg-base-100 shadow-xl">

                  <img src={sandMold.picture} className="w-full h-[200px]  rounded-lg  mx-auto " />


                </div>
              ))
            }
          </div></div>
      </div>
    </div>
  );
};

export default Gallery;


{/* <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5 mx-auto'>





</div> */}