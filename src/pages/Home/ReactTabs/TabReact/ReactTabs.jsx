import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'
import Aos from 'aos'
import 'aos/dist/aos.css'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { FaSignInAlt } from 'react-icons/fa';


const ReactTabs = () => {

  const [allData, setAllData] = useState([])
  const [loading,setLoading] = useState(true)

  const sandMolds = allData.filter(data => data.sand === 'Sand Molds')
  const SandShapers = allData.filter(data => data.sand === 'Sand Shaper')
  const SandTools = allData.filter(data => data.sand === 'Sand Tool')
  const SandBuckets = allData.filter(data => data.sand === 'Sand Bucket')
  const SandSculptingKits = allData.filter(data => data.sand === 'Sand Sculpting Kit')


  useEffect(() => {
    setLoading(true)
    fetch('https://spk-server-side.vercel.app/sandPalToy')
      .then(res => res.json())
      .then(data => {
        setLoading(false)
        setAllData(data)
      })
  }, [])

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  if(loading){
  return  <progress className="progress w-56"></progress>
  }
  return (
   <div className='mt-10'>
     <Tabs className='my-10'>
      <TabList className='mx-auto shadow-md text-center'>
        <h1 className='text-6xl font-extrabold bg-base-100 text-cyan-400 py-5 shadow-2xl rounded-md '>SandPal Toy</h1>
        <Tab>Sand Molds</Tab>
        <Tab>Sand Shapers</Tab>
        <Tab>Sand Tools</Tab>
        <Tab>Sand Buckets</Tab>
        <Tab>Sand Sculpting Kits</Tab>
      </TabList>

      <TabPanel >

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5' data-aos="zoom-in">
          {
            sandMolds.map((sandMold, index) => (
              <div key={index} className="card  w-[400]  bg-base-100 shadow-xl">

                <img src={sandMold.picture} className="w-full h-[300px] px-2 rounded-lg  mx-auto " />

                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    {sandMold.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p><strong>Price:</strong> {sandMold.price}</p>
                  <div className=" justify-between  flex">
                    <Rating style={{ maxWidth: 250 }} value={sandMold.rating} readOnly />
                    <Link to={`/viewDetails/${sandMold._id}`} className="btn btn-primary btn-outline"><FaSignInAlt className="w-8 h-8" /></Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5' data-aos="zoom-in">
          {
            SandShapers.map((sandShaper, index) => (
              <div key={index} className="card  w-[400]  bg-base-100 shadow-xl">

                <img src={sandShaper.picture} className="w-full h-[300px] px-2 rounded-lg  mx-auto " />

                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    {sandShaper.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p><strong>Price:</strong> {sandShaper.price}</p>
                  <div className=" justify-between  flex">
                    <Rating style={{ maxWidth: 250 }} value={sandShaper.rating} readOnly />
                    <Link to={`/viewDetails/${sandShaper._id}`} className="btn btn-primary btn-outline"><FaSignInAlt className="w-8 h-8" /></Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5' data-aos="zoom-in">
          {
            SandBuckets.map((SandBucket, index) => (
              <div key={index} className="card  w-[400]  bg-base-100 shadow-xl">

                <img src={SandBucket.picture} className="w-full h-[300px] px-2 rounded-lg  mx-auto " />

                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    {SandBucket.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p><strong>Price:</strong> {SandBucket.price}</p>
                  <div className=" justify-between  flex">
                    <Rating style={{ maxWidth: 250 }} value={SandBucket.rating} readOnly />
                    <Link to={`/viewDetails/${SandBucket._id}`} className="btn btn-primary btn-outline"><FaSignInAlt className="w-8 h-8" /></Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5' data-aos="zoom-in">
          {
            SandTools.map((SandTool, index) => (
              <div key={index} className="card  w-[400]  bg-base-100 shadow-xl">

                <img src={SandTool.picture} className="w-full h-[300px] px-2 rounded-lg  mx-auto " />

                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    {SandTool.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p><strong>Price:</strong> {SandTool.price}</p>
                  <div className=" justify-between  flex">
                    <Rating style={{ maxWidth: 250 }} value={SandTool.rating} readOnly />
                    <Link to={`/viewDetails/${SandTool._id}`} className="btn btn-primary btn-outline"><FaSignInAlt className="w-8 h-8" /></Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5' data-aos="zoom-in">
          {
            SandSculptingKits.map((SandSculptingKit, index) => (
              <div key={index} className="card  w-[400]  bg-base-100 shadow-xl">

                <img src={SandSculptingKit.picture} className="w-full px-2 h-[300px] rounded-lg  mx-auto " />

                <div className="card-body">
                  <h2 className="card-title text-2xl font-bold">
                    {SandSculptingKit.name}
                    <div className="badge badge-secondary">NEW</div>
                  </h2>
                  <p><strong>Price:</strong> {SandSculptingKit.price}</p>
                  <div className=" justify-between  flex">
                    <Rating style={{ maxWidth: 250 }} value={SandSculptingKit.rating} readOnly />
                    <Link to={`/viewDetails/${SandSculptingKit._id}`} className="btn btn-primary btn-outline"><FaSignInAlt className="w-8 h-8" /></Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>






    </Tabs>
   </div>
  );
};

export default ReactTabs;