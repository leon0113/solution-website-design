
import { setOpenSidenav, useMaterialTailwindController, } from "@/context";
import { Bars3Icon, } from "@heroicons/react/24/solid";
import { IconButton, Typography, } from "@material-tailwind/react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';

import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import nav4 from "../../Assets/calendar.png";
import nav7 from "../../Assets/cart.png";
import nav3 from "../../Assets/email.png";
import nav1 from "../../Assets/nav1.png";
import nav2 from "../../Assets/nav2.png";
import nav8 from "../../Assets/notification.png";
import nav6 from "../../Assets/search.png";
import nav5 from "../../Assets/star.png";

// import logo from '../../Assets/logo.png'
import "./navbar.css";

// import HoverNav from "./HoverNav/HoverNav";

export function DashboardNavbar() {

  const [image, setImage] = useState(null);

 const navigate = useNavigate()

  const [controller, dispatch] = useMaterialTailwindController();
  const { fixedNavbar, openSidenav } = controller;
  const { pathname } = useLocation();
  const [layout, page] = pathname.split("/").filter((el) => el !== "");



  const logout = ()=>{ 
    
    window.localStorage.clear()
    window.localStorage.removeItem("isLoggedIn");
    toast.success('Successfully logged out!', {
      position: "top-center",
      autoClose: 1000,
      });
    navigate('/auth/sign-in')
  }
  

 

  return (
    <>
      {/* <HoverNav /> */}
  

    <div
      color={fixedNavbar ? "white" : "transparent"}
      className={`rounded-xl transition-all ${
        fixedNavbar
          ? "sticky top-4 z-40 py-3 shadow-md shadow-blue-gray-500/5"
          : "px-0 py-1"
      }`}
      fullWidth
      blurred={fixedNavbar}
    >
      <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center">
        <div className="capitalize">
        
          <Typography variant="h6" color="blue-gray">
            {/* {page} */}
          </Typography>
        </div>
        <div className="flex items-center">
        
          <IconButton
            variant="text"
            color="blue-gray"
            className="grid xl:hidden"
            onClick={() => setOpenSidenav(dispatch, !openSidenav)}
          >
            <Bars3Icon strokeWidth={3} className="h-6 w-6 text-blue-gray-500" />
          </IconButton>
      
        </div>
      </div>
    </div>

    <Navbar collapseOnSelect bg="white" className="w-100 card row" style={{marginLeft:'-1px'}}>
           <Navbar.Collapse id="responsive-navbar-nav">

        
         
           {/* <img src={logo} alt="" className='logo'/>*/}
           <Nav className="me-auto ps-4">
             <div style={{ marginRight: "15px" }}>
               <img
                 src={nav1}
                 alt=""
                 style={{ height: "25px", width: "25px" }}
               />
             </div>
             <div style={{ marginRight: "15px" }}>
               <img
                 src={nav2}
                 alt=""
                 style={{ height: "22px", width: "22px" }}
               />
             </div>
             <div style={{ marginRight: "15px" }}>
               <img
                 src={nav3}
                 alt=""
                 style={{ height: "22px", width: "22px" }}
               />
             </div>
             <div style={{ marginRight: "15px" }}>
               <img
                 src={nav4}
                 alt=""
                 style={{ height: "22px", width: "22px" }}
               />
             </div>
             <div style={{ marginRight: "15px" }}>
               <img
                 src={nav5}
                 alt=""
                 style={{ height: "22px", width: "22px" }}
               />
             </div>
           </Nav>
      
          
       
     
      
      
   
      <Nav className="pe-5">
             <Nav.Link href="#deets" className="text-dark" style={{paddingTop:'13px'}}>
               English
             </Nav.Link>
             <div className="d-flex">
               <div style={{ marginRight: "15px",paddingTop:'13px' }}>
                 <img
                   src={nav6}
                   alt=""
                   style={{ height: "25px", width: "25px" }}
                 />
               </div>
               <div style={{ marginRight: "15px" ,paddingTop:'13px'}}>
                 <img
                   src={nav7}
                   alt=""
                   style={{ height: "22px", width: "22px" }}
                 />
               </div>
               <div style={{ marginRight: "15px",paddingTop:'13px' }}>
                 <img
                   src={nav8}
                   alt=""
                   style={{ height: "22px", width: "22px" }}
                 />
               </div>


               <div style={{ marginRight: "15px", paddingTop: '13px' }}>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 svgIcon" onClick={logout}>
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1012.728 0M12 3v9" />
                </svg>

              </div>

               <div className="d-flex flex-column align-items-center ps-1">
                          <div>
                            <p
                              className="p-1"
                              style={{
                                fontWeight: "400",
                                fontSize:'14px',
                                color: "#6E6B7B",
                                verticalAlign: "middle",
                                lineHeight: "normal",
                              }}
                            >
                              John Doe
                            </p>
                          </div>
                          <div>
                            <p
                              style={{
                                fontWeight: "400",
                                color: "#B9B9C3",
                                fontSize: "12px",
                                margin: "0",
                                marginTop: "1px",
                                lineHeight: "normal",
                              }}
                            >
                              Admin
                            </p>
                          </div>
                        </div>
               <div className="">
                 {image ? (
                   <img
                     src={URL.createObjectURL(image)}
                     className="avatar img-circle img-fluid img-thumbnail rounded-circle"
                     style={{ width: "120px" }}
                     alt="profile"
                   />
                 ) : (
                   <img
                     src="https://bootdey.com/img/Content/avatar/avatar7.png"
                     className="avatar

             img-circle img-fluid img-thumbnail rounded-circle"
                     style={{ width: "50px" }}
                     alt="avatar"
                   />
                 )}
               </div>
             </div>
             {/* <div>
   <p style={{  marginRight: '5px' }} className='text-muted'>Admin</p>
 </div> */}
           </Nav>
     
    
     </Navbar.Collapse>

     </Navbar>
    </>
  );
}

DashboardNavbar.displayName = "/src/widgets/layout/dashboard-navbar.jsx";

export default DashboardNavbar;
