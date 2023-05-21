
import { Helmet } from "react-helmet-async";
import HowToSand from "../../ExtraPart/HowToSand/HowToSand";
import SandPal from "../../ExtraPart/SandPal/SandPal";

import Banner from "../../Shared/Header/Banner/Banner";
import ReactTabs from "../ReactTabs/TabReact/ReactTabs";
import Gallery from "../../Gallery/Gallery";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Sand Pal !!</title>
            </Helmet>
            <Banner></Banner>
            <SandPal></SandPal>
            <Gallery></Gallery>
            <ReactTabs></ReactTabs>
            <HowToSand></HowToSand>
        </div>
    );
};

export default Home;