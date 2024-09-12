import React from 'react'
// import Link from 'next/link';
import MenuIcon from '@mui/icons-material/Menu';



export default function Offcanvas() {
  return (
    <>
    <button className="btn btn d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasResponsive" aria-controls="offcanvasResponsive"> <MenuIcon style={{ fontSize: 40 }}/> </button>
 
 <div className="alert alert-info d-none d-lg-block">Resize your browser to show the responsive offcanvas toggle.</div>
 
 <div className="offcanvas-lg offcanvas-end" style={{width:'50vw'}} tabIndex="-1" id="offcanvasResponsive" aria-labelledby="offcanvasResponsiveLabel">
   <div className="offcanvas-header">
     <h5 className="offcanvas-title" id="offcanvasResponsiveLabel">MENU</h5>
     <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#offcanvasResponsive" aria-label="Close"></button>
   </div>
   
 
   <div className="offcanvas-body">
   <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
               <li className="nav-item">
                 <a className="nav-link active" aria-current="page" href="/" >Home</a>
               </li>
               <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Services
                 </a>
                 <ul className="dropdown-menu">
                   <li><a className="dropdown-item" href="/services/tax_services" > Tax Services</a></li>
                   <li><a className="dropdown-item" href="/services/company_formation_reg"> Company Formation and Registration </a></li>
                   <li><a className="dropdown-item" href="/services/auditservices" > Audit Services </a></li>
                   <li><a className="dropdown-item" href="/services/drafting_agreements" > Drafting and Agreement </a></li>
                   <li><a className="dropdown-item" href="/services/appeals_litigations" > Appeals and Litigations </a></li>
                   <li><a className="dropdown-item" href="/services/advisory_services" > Advisory Services</a></li>
                   <li><a className="dropdown-item" href="/services/other_services" > Other Services </a></li>
                 </ul>
               </li> 
               
               <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Insights
                 </a>
                 <ul className="dropdown-menu">
                   <li><a className="dropdown-item" href="/achievementsmore" >Achievements</a></li>
                   <li><a className="dropdown-item" href="/profile" >Profile</a></li>
                   <li><a className="dropdown-item" href="/reviews" >Reviews</a></li>
                 </ul>
               </li> 

               <li className="nav-item">
                 <a className="nav-link" href="/gallerydetail" >Gallery</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/career" >Carrer</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/contact" >Contact</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="https://ca-dhirah-ostwal-adminpanel-pbf5.vercel.app/" >Signin</a>
               </li>
             </ul>
   </div>
 </div>
 
 
     
 
     </>
  )
}

