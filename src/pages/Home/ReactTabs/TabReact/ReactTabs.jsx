import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const ReactTabs = () => {

  const [allData, setAllData] = useState([])

  console.log(allData)

  const sandMolds = allData.filter(data => data.sand === 'Sand Molds')
  console.log(sandMolds)
  const SandShapers = allData.filter(data => data.sand === 'Sand Shaper')
  console.log(SandShapers)
  const SandTools = allData.filter(data => data.sand === 'Sand Tool')
  console.log(SandTools)
  const SandBuckets = allData.filter(data => data.sand === 'Sand Bucket')
  console.log(SandBuckets)
  const SandSculptingKits = allData.filter(data => data.sand === 'Sand Sculpting Kit')
  console.log(SandSculptingKits)

  useEffect(() => {
    fetch('http://localhost:5000/sandPalToy')
      .then(res => res.json())
      .then(data => setAllData(data))
  }, [])

  return (
    <Tabs className='m-20 '>
      <TabList className='mx-auto  text-center'>
        <h1 className='border'>SandPal Toy</h1>
        <Tab>Sand Molds</Tab>
        <Tab>Sand Shapers</Tab>
        <Tab>Sand Tools</Tab>
        <Tab>Sand Buckets</Tab>
        <Tab>Sand Sculpting Kits</Tab>
      </TabList>

      <TabPanel >

      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
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
                    <button className="btn btn-primary btn-outline">View Details</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
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
                    <button className="btn btn-primary btn-outline">View Details</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
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
                    <button className="btn btn-primary btn-outline">View Details</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
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
                    <button className="btn btn-primary btn-outline">View Details</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
      <TabPanel>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
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
                    <button className="btn btn-primary btn-outline">View Details</button>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </TabPanel>
     
    
      
      
      
      
    </Tabs>
  );
};

export default ReactTabs;