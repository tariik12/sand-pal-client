import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import SandMolds from '../Sand_Category/SandMolds/SandMolds';



const ReactTabs = () => {

    const [allData, setAllData] = useState([])

    console.log(allData)

    const sandMolds = allData.filter(data =>data.sand ==='Sand Molds' )
    console.log(sandMolds)
    const SandShapers = allData.filter(data =>data.sand ==='Sand Shaper' )
    console.log(SandShapers)
    const SandTools = allData.filter(data =>data.sand ==='Sand Tool' )
    console.log(SandTools)
    const SandBuckets = allData.filter(data =>data.sand ==='Sand Bucket' )
    console.log(SandBuckets)
    const SandSculptingKits = allData.filter(data =>data.sand ==='Sand Sculpting Kit' )
    console.log(SandSculptingKits)

    useEffect(()=>{
        fetch('Sand_pal.json')
        .then(res =>res.json())
        .then(data => setAllData(data))
    },[])

    return (
        <Tabs className='m-20 '>
    <TabList className='mx-auto  text-center'>
            <h1 className='border'>SandPal Toy</h1>
      <Tab>Sand Molds</Tab>
      <Tab>Sand Tools</Tab>
      <Tab>Sand Shapers</Tab>
      <Tab>Sand Buckets</Tab>
      <Tab>Sand Sculpting Kits</Tab>
      <Tab>Sand Castle Decorating Kits</Tab>
      <Tab>Sand Castle Building Sets</Tab>
      <Tab>Sand Castle Playsets</Tab>
      <Tab>Sand Castle Building Books</Tab>
      <Tab>Sand Castle Building Games</Tab>
    </TabList>

    <TabPanel >
       
     <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
     {
        sandMolds.map((sandMold,index) =><SandMolds
        
        key={index}
        sandMold={sandMold}
        ></SandMolds>)
      }
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
    {
      SandTools.map((SandTool,index)=>(
        <div key={index} className="card w-full  bg-base-100 shadow-xl">
  <figure><img src={SandTool.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {SandTool.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{SandTool.rating}</div>
      <div className="badge badge-outline">View Details</div>
    </div>
  </div>
</div>
      ))
    }
     </div>
    </TabPanel>
    <TabPanel>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-5'>
    {
      SandShapers.map((sandShaper,index)=>(
        <div key={index} className="card w-full  bg-base-100 shadow-xl">
  <figure><img src={sandShaper.picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {sandShaper.name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{sandShaper.rating}</div>
      <div className="badge badge-outline">View Details</div>
    </div>
  </div>
</div>
      ))
    }
     </div>
    </TabPanel>
    <TabPanel>
      <h1>hello</h1>
    </TabPanel>
    <TabPanel>
      <h2>Any content 5</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 6</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 7</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 8</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 9</h2>
    </TabPanel>
    <TabPanel>
      <h2>Any content 10</h2>
    </TabPanel>
  </Tabs>
    );
};

export default ReactTabs;