
import HowToSand from "../../ExtraPart/HowToSand/HowToSand";
import SandPal from "../../ExtraPart/SandPal/SandPal";

import Banner from "../../Shared/Header/Banner/Banner";
import ReactTabs from "../ReactTabs/TabReact/ReactTabs";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <SandPal></SandPal>
            {/* <Gallery></Gallery> */}
            <ReactTabs></ReactTabs>
            <HowToSand></HowToSand>
        </div>
    );
};

export default Home;