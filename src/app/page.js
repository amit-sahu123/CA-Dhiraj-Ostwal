"use client"
import Carousel from "../components/home/Carousel";
import About from "../components/home/About";
import Youtube from "../components/home/Youtube";
import FollowUs from "../components/home/FollowUs";
import Achievements from "../components/home/Achievements";
import Award from "../components/home/Award"
import GalleryContainer from "./gallery/Gallery11"
import Employee from "../components/home/Employee"

// import Tds from "./blogs/Tds"
// import Gst from "./blogs/Gstax"
// import IncomeTax from "./blogs/IncomeTax"
// import Appeals from "../blogs/Appeals"
// import Association from "./blogs/Association"
// import BondAd from "./blogs/BondAd"
// import Busdis from "./blogs/Busdis"
// import Bussinessformation from "./blogs/Bussiness_formation"
// import Charitable from "./blogs/Charitable"
// import CompF from "./blogs/CompF"
// import ComplianceAudit from "./blogs/ComplianceAudit"
// import InternalAudit from "./blogs/InternalAudit"
// import Litigation from "./blogs/Litigation"
// import Msme from "./blogs/Msme"
// import LLP from "./blogs/LLP"
// import NonProfitCom from "./blogs/NonProfitCom"
// import partnershipRg from "./blogs/PartnershipRg"
// import PartnershipRg from "./blogs/PartnershipRg";
// import Prop from "./blogs/Prop"
// import PropertyAdvice from "./blogs/PropertyAdvice"
// import Shareholder from "./blogs/Shareholder"
// import Shop_act from "./blogs/Shop_act"
// import Statutory from "./blogs/Statutory"
// import Taxaudit from "./blogs/Taxaudit"


export default function Home() {

  return (
    <div>
        <Carousel/>
        <About/>
        <Achievements/>
        <Youtube/> 
        <Employee/>
        <GalleryContainer/>  
        <Award/> 
        <FollowUs/>  

        {/* ------------ */}
        {/* <Appeals/> */}
        {/* <Association/> */}
        {/* <BondAd/> */}
        {/* <Busdis/> */}
        {/* <Bussinessformation/> */}
        {/* <Charitable/> */}
        {/* <CompF/> */}
        {/* <ComplianceAudit/> */}
        {/* <InternalAudit/> */}
        {/* <Litigation/> */}
        {/* <Msme/> */}
        {/* <LLP/> */}
        {/* <Gst/> */}
        {/* <Tds/> */}
        {/* <IncomeTax/> */}
        {/* ================================ */}

        {/* <NonProfitCom/> */}
        {/* <PartnershipRg/> */}
        {/* <Prop/> */}
        {/* <PropertyAdvice/> */}
        {/* <Shareholder/> */}
        {/* <Shop_act/> */}
        {/* <Statutory/> */}
        {/* <Taxaudit/> */}


    </div>

  );
}
