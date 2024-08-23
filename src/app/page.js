"use client"
import Carousel from "../components/home/Carousel";
import About from "../components/home/About";
import Youtube from "../components/home/Youtube";
import FollowUs from "../components/home/FollowUs";
import Achievements from "../components/home/Achievements";
import Award from "../components/home/Award"
import GalleryContainer from "./gallery/GalleryContainer"
import Employee from "../components/home/Employee"
import Spinner from '../loading/Spinner'
import Banner from '../components/Banner'

export default function Home() {

  return (
    <div>
         <Carousel/>
        <About/>
        <Achievements/>
        <Youtube/>
        <Employee/>


        {/* <GalleryContainer/>   */}
        {/* <Award/> */}
        <FollowUs/>   

        

    </div>

  );
}
