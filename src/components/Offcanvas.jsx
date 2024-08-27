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
                 <a className="nav-link active" aria-current="page" href="/" prefetch={true}>Home</a>
               </li>
               <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                   Services
                 </a>
                 <ul className="dropdown-menu">
                   <li><a className="dropdown-item" href="/services/tax_services" prefetch={true}> Tax Services</a></li>
                   <li><a className="dropdown-item" href="/services/company_formation_reg" prefetch={true}> Company Formation and Registration </a></li>
                   <li><a className="dropdown-item" href="/services/auditservices" prefetch={true}> Audit Services </a></li>
                   <li><a className="dropdown-item" href="/services/drafting_agreements" prefetch={true}> Drafting and Agreement </a></li>
                   <li><a className="dropdown-item" href="/services/appeals_litigations" prefetch={true}> Appeals and Litigations </a></li>
                   <li><a className="dropdown-item" href="/services/advisory_services" prefetch={true}> Advisory Services</a></li>
                   <li><a className="dropdown-item" href="/services/other_services" prefetch={true}> Other Services </a></li>
                 </ul>
               </li> 
               
               <li className="nav-item dropdown">
                 <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                 Insights
                 </a>
                 <ul className="dropdown-menu">
                   <li><a className="dropdown-item" href="/achievementsmore" prefetch={true}>Achievements</a></li>
                   <li><a className="dropdown-item" href="/profile" prefetch={true}>Profile</a></li>
                   <li><a className="dropdown-item" href="/gallerydetail" prefetch={true}>Gallery</a></li>
                   <li><a className="dropdown-item" href="/news" prefetch={true}>News</a></li>
                   <li><a className="dropdown-item" href="/reviews" prefetch={true}>Reviews</a></li>
                 </ul>
               </li> 

               <li className="nav-item">
                 <a className="nav-link" href="/gallerydetail" prefetch={true}>Gallery</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/career" prefetch={true}>Carrer</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/contact" prefetch={true}>Contact</a>
               </li>
               <li className="nav-item">
                 <a className="nav-link" href="/signin" prefetch={true}>Signin</a>
               </li>
             </ul>
   </div>
 </div>
 
 
     
 
     </>
  )
}

